import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './email-validator.directive';

interface IUser {
  name:string;
  lname:string;
  email: string;
  phone_no:string;
  password:string;
}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})


export class StudentRegistrationComponent {

  reactiveForm!:FormGroup;
  user: IUser;

  constructor(private service:SharedService, private router: Router) {
    this.user = {} as IUser;
  }

  response: any = "";

  @Input() Student:any;
  fname: string = "";
  lname: string = "";
  phone_no: string = "";
  email: string = "";
  password: string = "";
  
 
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250),
      ]),
      lname: new FormControl(this.user.lname, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      phone_no: new FormControl(this.user.phone_no, [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]),
    })
  }

  get first_name() {
    return this.reactiveForm.get('name')!;
  }
  get last_name(){
    return this.reactiveForm.get('lname')!;
  }

  get getEmail(){
    return this.reactiveForm.get('email')!;
  }
  
  get getPhone_no(){
    return this.reactiveForm.get('phone_no')!;
  }

  get getPassword(){
    return this.reactiveForm.get('password')!;
  }
  
 
  onClick(){
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    
    var val = {
      fname:this.fname,
      lname:this.lname,
      phone_no:this.phone_no,
      email:this.email,
      password:this.password
    };
    console.log(val)
    this.service.addStudent(val).subscribe(res=>{
      this.response = res;
      console.log(this.response)
      if(this.response === "Added Successfully!!"){
        this.router.navigate(['/login']);
      } else{
        alert(res.toString());
      } 
    });
  }
  



}
