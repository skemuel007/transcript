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

@NgModule({
    declarations: [ApplicationComponent, NavbarComponent, SidebarComponent, FooterComponent, DashboardComponent],
    imports: [
        ApplicationRoutingModule,
        CommonModule,
        SharedModule,
        AppMaterialModule
    ],
    providers: [],
    entryComponents: []
})

export class ApplicationModule {}
