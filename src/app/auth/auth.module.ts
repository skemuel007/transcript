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

@NgModule({
  declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent,
      ResetPasswordComponent,
      FooterComponent,
  ],
  imports: [
      CommonModule,
      AuthRoutingModule,
      SharedModule,
      AppMaterialModule,
  ],
  providers: [AuthenticationService],
  entryComponents: [],
})

export class AuthModule {}
