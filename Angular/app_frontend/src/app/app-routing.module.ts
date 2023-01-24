import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './login-page/login-page.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


const routes: Routes = [
  //{ path: 'recruiter', pathMatch: 'full' },
  { path: 'student', component: StudentRegistrationComponent},
  { path: 'login', component: login},
  { path: 'placement', component: PlacementRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
