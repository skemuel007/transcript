import {NgModule} from '@angular/core';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CommonModule} from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
    declarations: [PagesComponent, HomeComponent, AboutComponent, ContactUsComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ],
    providers: [],
    entryComponents: []
})

export class PagesModule {

}
