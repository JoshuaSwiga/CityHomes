import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.component.html',
  styleUrls: ['./viewlocation.component.css']
})
export class ViewlocationComponent {
  locations!: any[];
  message!: string;

  constructor(private http: ServiceForAPIService, private router: Router){}

  ngOnInit(){
    this.getLocations()
    if (this.locations.length === 0){
      this.message = 'Loading Locations'
    }else{
      this.message = ''
    }
  }
  
  getLocations(){
    this.http.viewLocation().subscribe((res: any)=>{
      this.locations = res.message;
      console.log(this.locations)
    })
  }
  editLocation(location_id: number){
    this.router.navigate([`edit-location/${location_id}`]);
  }

  deleteLocation(location_id: number){
    this.http.deleteLocation(location_id).subscribe((res: any)=>{
      alert('Location Deleted!');
      this.getLocations();
    })
  }

}
