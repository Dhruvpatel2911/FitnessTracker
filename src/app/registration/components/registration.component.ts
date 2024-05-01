import { Component, OnInit,} from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule,} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  imports: [CommonModule,ReactiveFormsModule, HttpClientModule,RouterModule],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm!: FormGroup;

  submitted: any;
  f: any;
  registrationForm!: FormGroup<any>;


constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private toaster: ToastrService
) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchingPasswords('password', 'confirmPassword') });
  }

  matchingPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['confirm']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ confirm: true });
       
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  register() {
    this.submitted = true;

    if (this.registrationForm.invalid) { 
      return;
    }

    const userDetail = Object.assign(this.registrationForm.value)
    this.http.post('http://localhost:3000/userDetails', JSON.stringify(userDetail), { "headers": { "content-type": "application/json"}}).subscribe(()=> {
      this.route.navigate(['/login']);
      this.toaster.success("Credentials generated");
    });
  }
}






