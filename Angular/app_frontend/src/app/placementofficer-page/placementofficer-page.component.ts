import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placementofficer-page',
  templateUrl: './placementofficer-page.component.html',
  styleUrls: ['./placementofficer-page.component.css']
})
export class PlacementofficerPageComponent {
  constructor(private service:SharedService, private router: Router) {}

  response: any = "";

  @Input() placementOfficerHome:any;
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

  onClick(){
    var val = {
      fname:this.fname,
      lname:this.lname,
      company_name:this.company_name,
      phone_no:this.phone_no,
      email:this.email,
      password:this.password
    };
    console.log(val)
    this.service.addRecruiterDetails(val).subscribe(res=>{
        alert(res.toString());
    });
  }

}
