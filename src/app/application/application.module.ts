import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {MatDatepickerModule} from '@angular/material';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../_shared/helpers/jwt.interceptor';
import {ErrorInterceptor} from '../_shared/helpers/error.interceptor';

@NgModule({
    declarations: [ApplicationComponent, NavbarComponent, SidebarComponent, FooterComponent, DashboardComponent, PaymentHistoryComponent, ProfileComponent, ApplyComponent],
    imports: [
        ApplicationRoutingModule,
        CommonModule,
        SharedModule,
        AppMaterialModule
    ],
    providers: [AuthenticationService, MatDatepickerModule,
        {
            provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
        }
    ],
    entryComponents: []
})

export class ApplicationModule {}
