import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent {

  constructor(private service:SharedService){}
  stud:any;
  StudentList:any=[];

  public searchText!: any['fname'];
  
  ngOnInit():void{
    this.refreshStudentList();
  }
  
  deleteClick(item:any){
    var val = {
      email: item.email
    };
    if(confirm("Are you sure?")){
      this.service.deleteStudent(val).subscribe(data=>{
        console.log(data)
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }

  refreshStudentList(){
    this.service.getStudentsList().subscribe(data=>{
      this.StudentList = data;
    });
  }
}
