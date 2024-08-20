import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [DatePipe]
})
export class UserProfileComponent implements OnInit {
  unitsData: any[] = [];
  userData: any = {};
  profilePicture: any; 
  loading: boolean = true;

  constructor(private router: Router, private http: ServiceForAPIService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getUserDataForProfile();
  }
  
  getUserDataForProfile(): void {
    this.loading = true;
    this.http.profileData().subscribe((res: any) => {
      console.log('Response from backend:', res);
      this.unitsData = res.units;
      this.userData = res.user;
      this.profilePicture = 'storage/images/' + this.userData.profile_photo;
      console.log(this.profilePicture);
      this.loading = false;
    }, error => {
      console.error('Error fetching profile data', error);
      this.loading = false;
    });
  }

  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'MMMM d, y, h:mm a');
  }
}
