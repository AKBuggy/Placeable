import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-recruiter-posts',
  templateUrl: './recruiter-posts.component.html',
  styleUrls: ['./recruiter-posts.component.css']
})
export class RecruiterPostsComponent {

  constructor(private service:SharedService, private router:Router) {}

  recruiter_posts: any = []
  recruiter_email:any

  ngOnInit(): void {
    this.recruiter_email = sessionStorage.getItem('user')
    
    var val ={
      recruiter_email:this.recruiter_email
    }

    console.log(val)
    this.service.ViewMyJobPosts(val).subscribe(data=>{
      this.recruiter_posts=data
      console.log(this.recruiter_posts)
    });
  }

  viewClick(JobPost:any){
    sessionStorage.setItem('job', JSON.stringify(JobPost));
    sessionStorage.setItem('company_name', JobPost.company_name);
    sessionStorage.setItem('job_position', JobPost.job_position);
    sessionStorage.setItem('job_description', JobPost.job_description);
    sessionStorage.setItem('job_post_id', JSON.stringify(JobPost.jobpost_id));
    this.router.navigate(['/studentCompany']);
  }

  deleteClick(JobPost:any){
    sessionStorage.getItem(JobPost.jobpost_id)
    this.service.deleteJobPost(JobPost.jobpost_id).subscribe(data=>{
      alert(data.toString());
      this.ngOnInit();
    })
  }

}
