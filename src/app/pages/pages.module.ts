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

@NgModule({
    declarations: [PagesComponent, HomeComponent, AboutComponent, ContactUsComponent, ProceduresComponent, DeliveryComponent, FaqComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ],
    providers: [],
    entryComponents: []
})

export class PagesModule {

}
