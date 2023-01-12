import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{

  constructor(private service:SharedService) {}

  @Input() Recruiter:any;
  fname: string = "";
  lname: string = "";
  company_name: string = "";
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

  addClick(){
    var val = {
      fname:this.fname,
      lname:this.lname,
      company_name:this.company_name,
      phone_no:this.phone_no,
      email:this.email,
      password:this.password
    };
    console.log(val)
    this.service.addRecruiter(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
