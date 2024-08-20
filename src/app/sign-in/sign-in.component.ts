import { Component } from '@angular/core';
import { ServiceForAPIService } from '../service-for-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInFormvalidation: FormGroup;

  constructor(private http: ServiceForAPIService, private router: Router){
    this.signInFormvalidation = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  validateUser(){
    if (this.signInFormvalidation.valid) {
      const userData = {
        username: this.signInFormvalidation.get('username')?.value,
        password: this.signInFormvalidation.get('password')?.value
      };

      console.log(userData);
      localStorage.setItem('user-name', this.signInFormvalidation.get('username')?.value)
      

      this.http.signIn(userData).subscribe((res: any) => {
        console.log(res);
        if (res.status === 200) {
          this.router.navigate(['/user-profile']);
          alert('Welcome!');
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
}
