import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-administrative-actions-on-units',
  templateUrl: './administrative-actions-on-units.component.html',
  styleUrls: ['./administrative-actions-on-units.component.css']
})

// For the Supper Admin (Swiga)
export class AdministrativeActionsOnUnitsComponent {

  unitId!: number | any;

  UnitData!: any[];
  LocationData!: any[];
  amenityData!: any[];
  ImageData!: any[];

  unitValidationForm!: FormGroup;
  amenityValidationForm!: FormGroup;
  locationValidationForm!: FormGroup;
  imageValidationForm!: FormGroup;
  
  constructor(private router: Router, private snapShot: ActivatedRoute, private http: ServiceForAPIService){
    this.unitValidationForm = new FormGroup({
      //title: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(){
    this.idGetter();
    this.authenticateFunction();
    this.logger();
    this.getunitData(this.unitId);
  }

  idGetter(){
    this.unitId = this.snapShot.snapshot.paramMap.get('id');
  }

  logger(){
    console.log(`${this.unitId}`)
  }

  getunitData(unitId: number){
    this.http.getSingleUnit(unitId).subscribe((res: any)=>{
      // console.log(res)
      this.UnitData = res.unit;
      this.LocationData = res.location;
      this.amenityData = res.amenity;
      this.ImageData = res.image;
      console.log(this.UnitData, this.LocationData, this.amenityData, this.ImageData);
    })
  }

  authenticateFunction(){
    let user = localStorage.getItem('user-name');
    let accessToken = localStorage.getItem('authentication-token');

    if (!user && !accessToken){
      this.router.navigate(['']);
      alert('Please Sign-in or Register as an Admin!');
    }
  }
}

