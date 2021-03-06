import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NgModule} from '@angular/core';
import { FooterComponent } from './_shared/footer/footer.component';
import {SharedModule} from '../_shared/modules/shared.module';
import {AppMaterialModule} from '../_shared/modules/app-material.module';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from '../_shared/services/authentication.service';
import {FacultyDepartmentService} from '../_shared/services/faculty-department.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../_shared/helpers/jwt.interceptor';
import {ErrorInterceptor} from '../_shared/helpers/error.interceptor';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent,
      ResetPasswordComponent,
      FooterComponent,
      NavBarComponent,
  ],
  imports: [
      CommonModule,
      AuthRoutingModule,
      SharedModule,
      AppMaterialModule,
      MDBBootstrapModule.forRoot()
  ],
  providers: [
      AuthenticationService,
      FacultyDepartmentService,
      {
          provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
      },
      {
          provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
      },
      AuthenticationService
  ],
  entryComponents: [],
})

export class AuthModule {}
