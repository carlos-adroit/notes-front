import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginregisterRoutingModule } from './loginregister-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/core/auth/auth.service';
import { AuthGuardService } from '../../services/core/guards/auth-guard.service';
import { TokenInterceptorService } from '../../services/core/interceptors/token-interceptor.service';

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
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class LoginregisterModule { }
