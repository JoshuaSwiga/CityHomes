import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceForAPIService } from '../service-for-api.service';

@Component({
  selector: 'app-viewueachser',
  templateUrl: './viewueachser.component.html',
  styleUrls: ['./viewueachser.component.css']
})
export class ViewueachserComponent {
  userId!: any;
  userData: any;

  constructor(private route: ActivatedRoute, private http: ServiceForAPIService, private router: Router){}

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.getData(this.userId);
  }

  getData(id: any){
    this.http.viewUser(id).subscribe((res: any)=>{
      this.userData = res.user;
    });
  }

  edituser(userId: any){
    const edited_data = {
      'name': this.userData.name,
      'email': this.userData.email,
      'phone_number': this.userData.phone_number,
      'password': this.userData.password,
      'is_admin': this.userData.is_admin,
      'profile_photo': this.userData.profile_photo,
      'description': this.userData.description,
      'general_property_overview': this.userData.general_property_overview,
      'admin': localStorage.getItem('authentication-token' || '')
    };

    if (userId){
      this.http.editUser(userId, edited_data).subscribe((res: any)=>{
        console.log('User Edited!');
        alert('User Edited Successfully!');
        this.router.navigate(['/view-users']);
      });
    }
  }
}
