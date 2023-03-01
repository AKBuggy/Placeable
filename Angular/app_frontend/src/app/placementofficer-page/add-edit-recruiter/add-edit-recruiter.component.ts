import { Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-recruiter',
  templateUrl: './add-edit-recruiter.component.html',
  styleUrls: ['./add-edit-recruiter.component.css']
})
export class AddEditRecruiterComponent implements OnInit{

  constructor(private service:SharedService){}
  
  @Input() rec:any;
  recruiter_id:string="";
  fname:string="";
  lname:string="";
  company_name:string="";
  phone_no:string="";
  email:string="";
  password:string="";

  ngOnInit(): void {
    this.recruiter_id=this.rec.recruiter_id;
    this.fname=this.rec.fname;
    this.lname=this.rec.lname;
    this.company_name=this.rec.company_name;
    this.phone_no=this.rec.phone_no;
    this.email=this.rec.email;
    this.password=this.rec.password;
  }

  addRecruiter(){
    var val = {
                recruiter_id:this.recruiter_id,
                fname:this.fname, 
                lname:this.lname,
                company_name:this.company_name,
                phone_no:this.phone_no,
                email:this.email,
                password:this.password};
    
    this.service.addRecruiterDetails(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateRecruiter(){
    var val = {
      recruiter_id:this.recruiter_id,
      fname:this.fname, 
      lname:this.lname,
      company_name:this.company_name,
      phone_no:this.phone_no,
      email:this.email,
      password:this.password};

      console.log(val);

      this.service.updateRecruiter(val).subscribe(res=>{
      alert(res.toString());
  });
}
}
