import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-each-unit',
  templateUrl: './view-each-unit.component.html',
  styleUrls: ['./view-each-unit.component.css'],
  providers: [DatePipe]
})
export class ViewEachUnitComponent {
  unitID: any;
  unitData: any = {};
  locationData: any = null;
  userData: any = {};
  imageData: any[] = [];
  amenityData: any = null;
  loading: boolean = true;

  constructor(private snapshot: ActivatedRoute, private http: ServiceForAPIService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.unitID = this.snapshot.snapshot.paramMap.get('id');
    this.getUnitData();
  }

  getUnitData() {
    this.http.getSingleUnit(this.unitID).subscribe((res: any) => {
      this.unitData = res.unit;
      this.locationData = res.location;
      this.userData = res.user;
      this.imageData = res.image;
      this.amenityData = res.amenity;
      this.loading = false;
    }, (error: any) => {
      console.error('Error fetching unit data', error);
      this.loading = false;
    });
  }

  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'MMMM d, y, h:mm a');
  }

  authenticationFunc() {
    // Your authentication logic here
  }
}
