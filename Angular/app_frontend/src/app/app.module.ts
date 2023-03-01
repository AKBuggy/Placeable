import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { login } from './login-page/login-page.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { PlacementofficerPageComponent } from './placementofficer-page/placementofficer-page.component';
import { RecruiterPageComponent } from './recruiter-page/recruiter-page.component';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';
import { AngularEditorModule} from '@kolkov/angular-editor';
<<<<<<< HEAD
import { ShowRecruitersComponent } from './placementofficer-page/show-recruiters/show-recruiters.component';
import { AddEditRecruiterComponent } from './placementofficer-page/add-edit-recruiter/add-edit-recruiter.component';
import { ShowStudentsComponent } from './student-page/show-students/show-students.component';
import { DeleteStudentsComponent } from './student-page/delete-students/delete-students.component';
=======
import { StudentCompanyComponent } from './student-company/student-company.component'
>>>>>>> ab9a92a (Comment-Section)

@NgModule({
  
  declarations: [
    AppComponent,
    RegHomeComponent,
    StudentRegistrationComponent,
    login,
    PlacementRegistrationComponent,
    StudentPageComponent,
    PlacementofficerPageComponent,
    RecruiterPageComponent,
    TextareaAutoresizeDirective,
    ShowRecruitersComponent,
    AddEditRecruiterComponent,
    ShowStudentsComponent,
    DeleteStudentsComponent,
    
    StudentCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
