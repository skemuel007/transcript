import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AppMaterialModule} from '../_shared/modules/app-material.module';
import {SharedModule} from '../_shared/modules/shared.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
    declarations: [AdminComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
    imports: [
        AdminRoutingModule,
        AppMaterialModule,
        SharedModule,
    ],
    providers: [],
    entryComponents: []
})

export class AdminModule {

}
