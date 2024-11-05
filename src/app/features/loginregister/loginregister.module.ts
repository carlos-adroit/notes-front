import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginregisterRoutingModule } from './loginregister-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LoginregisterRoutingModule,
    MaterialModule
  ]
})
export class LoginregisterModule { }
