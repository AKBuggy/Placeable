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

@NgModule({
  declarations: [
    AppComponent,
    RegHomeComponent,
    StudentRegistrationComponent,
    login,
    PlacementRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
