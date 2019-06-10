import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {BusaryModule} from './busary/busary.module';
import {RegistryModule} from './registry/registry.module';

const routes: Routes = [

    {
        path: '',
        component: AdminComponent,
        children: [
            {path: 'login', component: LoginComponent, data: {title: 'Login'}},
            {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'}},
            {path: 'reset-password', component: ResetPasswordComponent, data: {title: 'Reset Password'}},
            {
              path: 'busary',
              loadChildren: () => BusaryModule
            },
            {
              path: 'registry',
              loadChildren: () => RegistryModule
            },
            {path: '', redirectTo: 'login', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}

