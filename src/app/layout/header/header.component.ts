import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoggedUserDetail, LoggedUserDetailJson } from 'src/app/app.classes';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  
  LoggedUserDetail: LoggedUserDetail = new LoggedUserDetail();
  

  constructor(private http: HttpClient, private router: Router, private actRouter: ActivatedRoute , private toaster: ToastrService) { }
  ngOnInit(): void {
    this.http.get<LoggedUserDetailJson>('/assets/json/preserve/preserve.json').subscribe((data) => {
      this.LoggedUserDetail = data.loggedInUserDetails[0] ?? new LoggedUserDetail();
    });
  

}
logout(){
  this.http.delete('http://localhost:3000/loggedInUserDetails/' + this.LoggedUserDetail.id, { "headers": { "content-type": "application/json"}}).subscribe(() => {
      this.toaster.success('Logout SuccessFully');
      this.router.navigate(['/login']);
  });
}
}