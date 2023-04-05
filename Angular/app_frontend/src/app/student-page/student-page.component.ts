import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit{

  constructor(private sharedService: SharedService, private router: Router) { }

  JobPosts:any=[]
  jobpost_id:string=""
  user_type:any
  student_type:string="Student"
  placement_type:string="PO"

  @Input()
  comment:string=""

  public searchText!: any['company_name'];

  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user-type')
    this.refreshJobPosts();
  }

  refreshJobPosts(){
    this.sharedService.getJobPosts().subscribe(data=>{
      this.JobPosts=data;
    });
  }

  viewClick(item: any){
    sessionStorage.setItem('job', JSON.stringify(item));
    sessionStorage.setItem('company_name', item.company_name);
    sessionStorage.setItem('job_position', item.job_position);
    sessionStorage.setItem('job_description', item.job_description);
    sessionStorage.setItem('job_post_id', JSON.stringify(item.jobpost_id));
    this.router.navigate(['/studentCompany']);
  }

}
