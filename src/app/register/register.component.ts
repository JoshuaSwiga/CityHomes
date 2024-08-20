import { Component, OnInit } from '@angular/core';
import { ServiceForAPIService } from '../service-for-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registration_form: FormGroup;
  showPassword = false;
  adminStatus: any;

  constructor(private http: ServiceForAPIService, private route: ActivatedRoute, private router: Router) {
    this.registration_form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      generalPropertyOverview: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone_number: new FormControl('', [Validators.required, Validators.minLength(6)]),
      is_admin: new FormControl(false, [Validators.required]),
      profile_photo: new FormControl('', [Validators.required]) // Add profile_photo control with required validation
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.registration_form.patchValue({
          profile_photo: reader.result as string // Store the Base64 string
        });
      };
    }
  }

  onSubmit(): any {
    if (this.registration_form.valid) {

      this.adminStatus = this.registration_form.get('is_admin')?.value;

      if (this.adminStatus === 'true'){
        this.adminStatus = true;
      }else{
        this.adminStatus = false;
      }

      const RegistrationData = {
        'name': this.registration_form.get('name')?.value || '',
        'email': this.registration_form.get('email')?.value || '',
        'password': this.registration_form.get('password')?.value || '',
        'generalPropertyOverview': this.registration_form.get('generalPropertyOverview')?.value || '',
        'description': this.registration_form.get('description')?.value || '',
        'phone_number': this.registration_form.get('phone_number')?.value || '',
        'is_admin': this.adminStatus,
        'profile_photo': this.registration_form.get('profile_photo')?.value // Base64 encoded image
      };

      console.log(RegistrationData);

      this.register_user(RegistrationData);
    } else {
      console.error('Form Invalid');
    }
  }

  register_user(data: any): any {
    return this.http.registerUser(data).subscribe(
      (res: any) => {
        console.log(res);

        
        this.router.navigate(['/sign-in']);
      },
      (error: any) => {
        console.error('Registration failed', error);
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
