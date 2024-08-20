import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceForAPIService } from 'src/app/service-for-api.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent {
  form_validation: any;
  city!: string;
  state!: string;
  country!: string;

  constructor(private http: ServiceForAPIService, private router: Router){
    this.form_validation = new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(){
    this.authChecker()
  }

  addLocation(data: any){
    this.http.createLocation(data).subscribe((res: any)=>{
      console.log('Location Created');
      alert("Location Added");
      this.router.navigate(['/view-location'])
    })

  }

  authChecker(){
    const user = localStorage.getItem('authentication-token');
    if (user === null){
      this.router.navigate(['/'])
    }
  }
  submited(){
    if (this.form_validation.valid){
      const data =this.form_validation.value;
      this.addLocation(data)
    }else{
      alert('Please provide valid values!')
    }
  }

}
