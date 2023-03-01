import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent {

  constructor(private service:SharedService){}

  @Input() stud:any;

}
