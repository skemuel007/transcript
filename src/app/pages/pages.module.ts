import {NgModule} from '@angular/core';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CommonModule} from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FaqComponent } from './faq/faq.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { SideBarComponent } from './_shared/side-bar/side-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {AuthenticationService} from '../_shared/services/authentication.service';

@NgModule({
    declarations: [PagesComponent, HomeComponent, AboutComponent, ContactUsComponent,
        ProceduresComponent, DeliveryComponent, FaqComponent, NavBarComponent, FooterComponent, SideBarComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [
        AuthenticationService
    ],
    entryComponents: []
})

export class PagesModule {

}
