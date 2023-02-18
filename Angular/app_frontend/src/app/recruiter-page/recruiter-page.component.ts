import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-recruiter-page',
  templateUrl: './recruiter-page.component.html',
  styleUrls: ['./recruiter-page.component.css']
})
export class RecruiterPageComponent {

  constructor(private service:SharedService) {}

  @Input() JobPost:any;
  company_name: string = "";
  recruiter_name: string = "";
  job_position: string = "";
  job_description: string = "";
 
  ngOnInit(): void {}

  onClick(){
    var val = {
      company_name:this.company_name,
      recruiter_name:this.recruiter_name,
      job_position:this.job_position,
      job_description:this.job_description
    };
    console.log(val)
    this.service.addJobPost(val).subscribe(res=>{
      alert(res.toString());
    });
    this.clearInputs();
  }

  clearInputs(){
    this.company_name=""
    this.recruiter_name=""
    this.job_position=""
    this.job_description=""
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };
}
