import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  unitValidaters: FormGroup;
  locationValidater!: FormGroup;
  amenitiesValidatrt!: FormGroup;
  imageValidater!:FormGroup;
  currentStep: number = 1;
  
  // unitData
  title: any;
  subtitle: any;
  category: any;
  accomodationInformation: any;
  numberOfBedrooms: any;
  numberOfBathrooms: any;
  priceInformation: any;

  // Location Information
  city: any;
  state: any;
  country: any;

  // Amenities
  amenities: any;

  // Image
  image: any;


  // Validations
  constructor(private http: ServiceForAPIService, private router: Router){

    // Unit Validations
    this.unitValidaters = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      subtitle: new FormControl('', [Validators.required, Validators.minLength(5)]),
      category: new FormControl('', [Validators.required]),
      accomodationInformation: new FormControl('', [Validators.required]),
      numberOfBedrooms: new FormControl('', [Validators.required]),
      numberOfBathrooms: new FormControl('', [Validators.required]),
      priceInformation: new FormControl('', [Validators.required])
    });

    // Location Validation
    this.locationValidater = new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });

    // Amenity validation
    this.amenitiesValidatrt = new FormGroup({
      amenities: new FormControl('', [Validators.required])
    });
    
    // Image validation
    this.imageValidater = new FormGroup({
      image: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(){
    const authTok = localStorage.getItem('authentication-token');
    if (!authTok){
      // this.router.navigate(['register'])
    }

  }
  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }  

  CreateUnitAfterCollection(){
    let collectedData = {
      'title': this.unitValidaters.get('title')?.value || '',
      'subtitle': this.unitValidaters.get('subtitle')?.value || '',
      'category': this.unitValidaters.get('category')?.value || '',
      'accomodation_information':this.unitValidaters.get('accomodationInformation')?.value || '',
      'number_of_bedrooms':this.unitValidaters.get('numberOfBedrooms')?.value || '',
      'number_of_bathrooms':this.unitValidaters.get('numberOfBathrooms')?.value || '',
      'price_information':this.unitValidaters.get('priceInformation')?.value || '',
      'image': this.imageValidater.get('image')?.value || '', 
      'amenities': this.amenitiesValidatrt.get('amenities')?.value || '', 
      'city': this.locationValidater.get('city')?.value || '', 
      'state': this.locationValidater.get('state')?.value || '', 
      'country': this.locationValidater.get('country')?.value || ''
    }
    if (collectedData){
      this.http.createUnit(collectedData).subscribe((res: any)=>{
        console.log(res)
      })
    }
  }


  CreateUnit() {
    if (this.unitValidaters.valid) {
      
      this.CreateUnitAfterCollection();
      
    }
  }
}
