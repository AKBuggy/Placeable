import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-company',
  templateUrl: './student-company.component.html',
  styleUrls: ['./student-company.component.css']
})
export class StudentCompanyComponent {

  constructor(private sharedService: SharedService, private router: Router) { }

  company_name:any
  job_position:any
  job_description:any
  job_post_id:any
  userData:any
  jobData:any
  user_email:string=""
  response:any=""
  Comments:any=[]
  user_type:any
  student_type:string="Student"
  placement_type:string="PO"
  comment_id:string=""

  @Input()
  comment:string=""

  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user-type')
    this.company_name = sessionStorage.getItem('company_name')
    this.job_position = sessionStorage.getItem('job_position')
    this.job_description = sessionStorage.getItem('job_description')
    this.job_post_id = sessionStorage.getItem('job_post_id')
    this.userData = sessionStorage.getItem('user');

    this.refreshComments(this.job_post_id)
  }


  onClick(){
    this.userData = sessionStorage.getItem('user');
    this.jobData = sessionStorage.getItem('job_post_id');
    this.job_post_id = JSON.parse(this.jobData);

    var val = {
      user_email:this.userData,
      comment:this.comment,
      jobpost_id:this.job_post_id
    }

    this.sharedService.addComment(val).subscribe(data=>{
      this.response=data;
      console.log(val);
    });

    this.ngOnInit()
  }

  backClick(){
    if(this.user_type=="Recruiter"){
      this.router.navigate(['/recruiterPosts'])
    }
    else{
      this.router.navigate(['/studentHome'])
    }
  }

  refreshComments(job_post_id:any){
    this.sharedService.getComments(job_post_id).subscribe(data=>{
      this.Comments=data;
    });
  }

  deleteComment(Comment:any){
    this.comment_id = Comment.comment_id
    console.log(this.comment_id)
    if(confirm("Are you sure?")){
      this.sharedService.deleteComment(this.comment_id).subscribe(data=>{
        alert(data.toString());
      });
    }
    this.refreshComments(this.job_post_id);
  }

  logout(){
    this.router.navigate(['home']);
  }

}
