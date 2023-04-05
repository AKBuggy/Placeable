import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './login-page/login-page.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { PlacementofficerPageComponent } from './placementofficer-page/placementofficer-page.component';
import { RecruiterPageComponent } from './recruiter-page/recruiter-page.component';
import { ShowStudentsComponent } from './student-page/show-students/show-students.component';
import { StudentCompanyComponent } from './student-company/student-company.component';
import { RecruiterPostsComponent } from './recruiter-posts/recruiter-posts.component';


const routes: Routes = [
  //{ path: 'recruiter', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RegHomeComponent},
  { path: 'student', component: StudentRegistrationComponent},
  { path: 'login', component: login},
  { path: 'placement', component: PlacementRegistrationComponent},
  { path: 'studentHome', component: StudentPageComponent},
  { path: 'studentHome/details', component: ShowStudentsComponent},
  { path: 'placementOfficerHome', component: PlacementofficerPageComponent},
  { path: 'recruiterHome', component: RecruiterPageComponent},
  { path: 'studentCompany', component: StudentCompanyComponent},
  { path: 'recruiterPosts', component: RecruiterPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
