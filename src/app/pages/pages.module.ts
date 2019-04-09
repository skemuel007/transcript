import {NgModule} from '@angular/core';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [PagesComponent, HomeComponent, AboutComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ],
    providers: [],
    entryComponents: []
})

export class PagesModule {

}
