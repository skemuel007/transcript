import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent,
      ResetPasswordComponent,
  ],
  imports: [
      AuthRoutingModule,
  ],
  providers: [],
  entryComponents: [],
})

export class AuthModule {}
