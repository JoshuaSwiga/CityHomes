import { Component } from '@angular/core';
import { ServiceForAPIService } from '../service-for-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})

// TODO: Add dynamic routing for accessing each user profile and their constent

export class ViewusersComponent {
  constructor(private http: ServiceForAPIService, private route: ActivatedRoute, private router: Router){}

  allusers!: any[];
  currentUser: any; 

  ngOnInit(){
    this.currentUser = localStorage.getItem('user-name')
    this.getUserData()
    
  }

  removeUser(userId: any){
    
    if (userId){
      this.http.deleteUser(userId).subscribe((res: any)=>{
        console.log(res)
        console.log('User has been deleted');
        alert('User has been Deleted');
        this.getUserData();
      })
    }

  }

  editUser(userId: any){
    this.router.navigate([`view-user/${userId}`])
  }

  getUserData(){
    return this.http.viewUsers().subscribe((res: any)=>{
      console.log(res.data)
      this.allusers = res.data
    })
  }

}
