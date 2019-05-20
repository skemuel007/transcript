import {NgModule} from '@angular/core';
import {SharedModule} from '../_shared/modules/shared.module';
import {AppMaterialModule} from '../_shared/modules/app-material.module';
import { ApplicationComponent } from './application.component';
import {ApplicationRoutingModule} from './application-routing.module';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './apply/apply.component';
import {AuthenticationService} from '../_shared/services/authentication.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../_shared/helpers/jwt.interceptor';
import {ErrorInterceptor} from '../_shared/helpers/error.interceptor';
import {PaymentService} from '../_shared/services/payment.service';
import { DialogPaymentSummaryComponent } from './dialog-payment-summary/dialog-payment-summary.component';
import {FacultyDepartmentService} from '../_shared/services/faculty-department.service';
import {UserService} from '../_shared/services/user.service';
import {AngularRaveModule} from 'angular-rave';

@NgModule({
    declarations: [ApplicationComponent, NavbarComponent, SidebarComponent,
        FooterComponent, DashboardComponent, PaymentHistoryComponent, ProfileComponent, ApplyComponent, DialogPaymentSummaryComponent],
    imports: [
        ApplicationRoutingModule,
        SharedModule,
        AppMaterialModule,
        AngularRaveModule,
    ],
    providers: [
        AuthenticationService,
        PaymentService,
        FacultyDepartmentService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
        }
    ],
    entryComponents: [DialogPaymentSummaryComponent]
})

export class ApplicationModule {}
