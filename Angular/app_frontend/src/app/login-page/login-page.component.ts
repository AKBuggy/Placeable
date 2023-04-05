import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class login implements OnInit{

  constructor(private service:SharedService, private router: Router) {}

  response: any = "";
  sessionData: any;

  @Input() login:any;
  email: string = "";
  password: string = "";
  optradio: string="";
 
  ngOnInit(): void {
    // this.fname = this.Recruiter.fname
    // this.lname = this.Recruiter.lname,
    // this.company_name = this.Recruiter.company_name,
    // this.phone_no = this.Recruiter.phone_no,
    // this.email = this.Recruiter.email,
    // this.password = this.Recruiter.password
  }


  onClick(){
    var val = {
      email:this.email,
      password:this.password,
      optradio:this.optradio
    };
    sessionStorage.setItem('user',val.email);
    sessionStorage.setItem('user-type', val.optradio);
    console.log(val)
    this.service.login(val).subscribe(res=>{
      this.response = res;
      console.log(this.response)
      if(this.response === "Student"){
        this.router.navigate(['/studentHome']);
      } else if(this.response === "Recruiter"){
        this.router.navigate(['/recruiterHome']);
      } else if(this.response === "PO"){
        this.router.navigate(['/placementOfficerHome']);
      } else{
        alert(res.toString());
      }
    });
  }
}

