import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit{

  constructor(private sharedService: SharedService) { }

  JobPosts:any=[]
  JobPost:any
  company_name:string=""
  job_position:string=""
  job_description:string=""
  TableSection:boolean=false
  JobPostSection:boolean=true

  ngOnInit(): void {
    this.refreshJobPosts();
  }

  refreshJobPosts(){
    this.sharedService.getJobPosts().subscribe(data=>{
      this.JobPosts=data;
    });
  }

  viewClick(item: any){
    this.TableSection=true
    this.JobPostSection=false
    this.JobPost=item
    this.company_name=item.company_name;
    this.job_position=item.job_position;
    this.job_description=item.job_description;
    console.log(this.JobPost);
  }

  backClick(){
    this.TableSection=false
    this.JobPostSection=true
  }

}
