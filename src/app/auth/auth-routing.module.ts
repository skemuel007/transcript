import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {title: 'Login'}
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {title: 'Register'}
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                data: {title: 'Forgot Password'}
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
                data: {title: 'Reset Password'}
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {}
