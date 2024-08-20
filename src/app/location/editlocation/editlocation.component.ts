import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.css']
})
export class EditlocationComponent implements OnInit{
  
  locationId!: any;
  form_validation!: any;

  state!: string;
  country!: string;
  city!:string;
  
  constructor(private http: ServiceForAPIService, private snapshot: ActivatedRoute, private fb: FormBuilder, private router: Router){
    this.form_validation = new FormGroup({

      city: new FormControl('', [Validators.required]),
      country: new FormControl('',[Validators.required]),
      state: new FormControl('', [Validators.required])

    })
  }

  ngOnInit(): void{
    this.locationId = this.snapshot.snapshot.paramMap.get('id');
    this.getLocationData(this.locationId)
  }

  getLocationData(id: number){
    this.http.viewEachLocation(id).subscribe((res: any)=>{
      
      this.city = res.data.city;
      this.state = res.data.state;
      this.country = res.data.country

    })
  }

  editLocation(){
    const data_to_edit = {
      city: this.city,
      country: this.country,
      state: this.state
    }

    this.http.editLocation(this.locationId, data_to_edit).subscribe((res: any)=>{
      console.log(res);
      alert('Location Has been edited!');
      this.router.navigate(['/view-location']);
    });

  }

}
