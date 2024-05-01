import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';
import { LoggedUserDetail, UserDetail, UserDetailJson } from 'src/app/app.classes';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isSubmit: boolean = false;
    isValidCredetial: boolean = false;
    submitted: any;
    f: any;
    login: any;
    userDetails: Array<UserDetail> = []
  
    constructor(private formBuilder: FormBuilder,private route: Router, private http: HttpClient, private toaster: ToastrService) {
      this.isValidCredetial = false;
      
      this.loginForm = this.formBuilder.group({
       
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        
      });
    }
    ngOnInit(): void {
      this.http.get<UserDetailJson>('/assets/json/preserve/preserve.json').subscribe((data) => {
        this.userDetails = data.userDetails;
      })
      this.http.get<Array<LoggedUserDetail>>('http://localhost:3000/loggedInUserDetails').subscribe(x => {
        if(x){
          x.forEach(y => {
            this.http.delete('http://localhost:3000/loggedInUserDetails/' + y.id).subscribe()
          })
        }
      })
    }
  
    onLogin() {
      if(!this.loginForm.valid){
        alert('Form Invalid')
        return;
      }
      const emailDetail = this.userDetails.find(x => x.email === this.loginForm.value['email']);
      if(!emailDetail){
        alert('Please enter valid email or register it.');
        return;
      }
      const passwordDetail = this.userDetails.find(x => x.password === this.loginForm.value['password']);
      if(!passwordDetail){
        alert('Please enter valid password or register it.');
        return;
      }
      this.isValidCredetial = true;
      const userDetail = new LoggedUserDetail();
      const loggedUserDetail = this.userDetails.find(x => x.email === this.loginForm.value['email']);
      if(loggedUserDetail){
        userDetail.id = loggedUserDetail.id;
        userDetail.username = loggedUserDetail.username;
        userDetail.isLoggedIn = true;
      }
  
      const userDetailjson = Object.assign(userDetail)
      
      this.http.post('http://localhost:3000/loggedInUserDetails', JSON.stringify(userDetailjson), { "headers": { "content-type": "application/json"}}).subscribe(() => {
        this.route.navigate(['/home']);
        this.toaster.success('Logged in SuccessFully');
      });
    }
  }
  
  
  
  