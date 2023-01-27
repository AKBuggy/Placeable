import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './login-page/login-page.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


const routes: Routes = [
  //{ path: 'recruiter', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RegHomeComponent},
  { path: 'student', component: StudentRegistrationComponent},
  { path: 'login', component: login},
  { path: 'placement', component: PlacementRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
