import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class login implements OnInit{

  constructor(private service:SharedService) {}
 
  ngOnInit(): void {
    // this.fname = this.Recruiter.fname
    // this.lname = this.Recruiter.lname,
    // this.company_name = this.Recruiter.company_name,
    // this.phone_no = this.Recruiter.phone_no,
    // this.email = this.Recruiter.email,
    // this.password = this.Recruiter.password
  }


}
