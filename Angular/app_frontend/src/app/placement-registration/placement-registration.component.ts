import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-registration',
  templateUrl: './placement-registration.component.html',
  styleUrls: ['./placement-registration.component.css']
})
export class PlacementRegistrationComponent {

  
  constructor(private service:SharedService, private router: Router) {}

  response: any = "";

  @Input() Student:any;
  fname: string = "";
  lname: string = "";
  phone_no: string = "";
  email: string = "";
  password: string = "";
  
 
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
      fname:this.fname,
      lname:this.lname,
      phone_no:this.phone_no,
      email:this.email,
      password:this.password
    };
    console.log(val)
    this.service.addRecruiter(val).subscribe(res=>{
      this.response = res;
      console.log(this.response)
      if(this.response === "Added Placement Officer Successfully!!"){
        this.router.navigate(['/login']);
      } else{
        alert(res.toString());
      }   
    });
  }


}
