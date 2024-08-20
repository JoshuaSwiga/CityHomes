import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  showLogoutBtn: any;

  constructor(private router: Router){}

  logOut(event: any){
    if (event){
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  ngOnInit(){
    let credentials = localStorage.getItem('stat');

    if (credentials === 'loggedCityHomes'){
      this.showLogoutBtn = true
    }
  }

}
