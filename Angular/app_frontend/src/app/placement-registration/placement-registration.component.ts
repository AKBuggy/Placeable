import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-placement-registration',
  templateUrl: './placement-registration.component.html',
  styleUrls: ['./placement-registration.component.css']
})
export class PlacementRegistrationComponent {

  
  constructor(private service:SharedService) {}

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
    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
