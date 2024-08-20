import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceForAPIService {

  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) { }

  // User Services
  registerUser(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'is_admin': localStorage.getItem('authentication-token') ?? '',
    });
    return this.http.post(`${this.apiUrl}/register`, data, { headers });
  }

  editUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/edit/${id}`, data);
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${userId}`);
  }

  viewUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/read`);
  }

  viewUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/each_user/${id}`);
  }

  signIn(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/sign-in`, userData);
  }
  // Profile service. 
  profileData(){
    const CustomHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'username' : localStorage.getItem('user-name') ?? '',
    });

    return this.http.get(`${this.apiUrl}/get-profile-data`, { 
      headers: CustomHeader 
    });
  }

  // Location Services 
  viewLocation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/see-location`);
  }

  viewEachLocation(id: number){
    return this.http.get(`${this.apiUrl}/see-location/${id}`)
  }

  editLocation(id: number, data: any): Observable<any>{
    
    const Customheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'is_admin': localStorage.getItem('authentication-token') ?? '',
    });

    return this.http.put(`${this.apiUrl}/edit-location/${id}`, data, { headers: Customheaders })
  }

  createLocation(data: any): Observable<any>{
    const Customheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'is_admin': localStorage.getItem('authentication-token') ?? '',
    });

    return this.http.post(`${this.apiUrl}/add-location`, data, { headers: Customheaders })
  }

  deleteLocation(id: number): Observable<any>{
    const customHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'is_admin': localStorage.getItem('authentication-token') ?? '',
    });

    return this.http.delete(`${this.apiUrl}/delete-location/${id}`, { headers: customHeaders })
  }

  // Unit Services
  getUnit(){
    return this.http.get(`${this.apiUrl}/see-units`);
  }

  getSingleUnit(unitId: number): void | any{
    return this.http.get(`${this.apiUrl}/see-unit/${unitId}`);
  }

  createUnit(unitData: any){
    const unitHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'username': localStorage.getItem('user-name') ?? '',
      'authentication_token': localStorage.getItem('authentication-token') ?? '',
    })
    
    return this.http.post(`${this.apiUrl}/add-unit`, unitData, { headers: unitHeader })
  }

  editUnit(data: any){
    return this.http.post(`${this.apiUrl}/`, data)
  }

  // Image Routes
  addImage(ImageData: any){
    let username = localStorage.getItem('username') ?? '';

    return this.http.post(`${this.apiUrl}/add-image`, ImageData)
  }
}
