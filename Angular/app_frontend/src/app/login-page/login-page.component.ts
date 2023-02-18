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
    console.log(val)
    this.service.login(val).subscribe(res=>{
      this.response = res;
      console.log(this.response)
      if(this.response === "Less go"){
        this.router.navigate(['/home']);
      } else{
        alert(res.toString());
      }   
    });
  }
}

