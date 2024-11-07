import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginregisterRoutingModule } from './loginregister-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginregisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginregisterModule { }
