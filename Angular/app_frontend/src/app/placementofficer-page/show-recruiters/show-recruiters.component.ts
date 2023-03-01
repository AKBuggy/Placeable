import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';




@Component({
  selector: 'app-show-recruiters',
  templateUrl: './show-recruiters.component.html',
  styleUrls: ['./show-recruiters.component.css']
})
export class ShowRecruitersComponent {
  constructor(private service:SharedService){}

  RecruiterList:any=[];

  ngOnInit():void{
    this.refreshRecruiterList();
  }

  ModalTitle: string="";
  ActivateAddEditRecComp:boolean=false;
  rec:any;

  display = "none";
  addClick(){
    this.rec={
      recruiter_id:"",
      fname:"",
      lname:"",
      company_name:"",
      phone_no:"",
      email:"",
      password:""
    }
    this.ModalTitle="Add Recruiter";
    this.ActivateAddEditRecComp=true;
    this.display = "none";
  }

  editClick(item:any){
    this.rec = item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditRecComp=true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteRecruiter(item.recruiter_id).subscribe(data=>{
        alert(data.toString());
        this.refreshRecruiterList();
      })
    }
  }

  closeClick(){
    
    this.ActivateAddEditRecComp=false;
    this.refreshRecruiterList();
    this.display = "none";
  }


  refreshRecruiterList(){
    this.service.getRecruitersList().subscribe(data=>{
      this.RecruiterList = data;
    });
  }
}
