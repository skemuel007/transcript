import {NgModule} from '@angular/core';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [PagesComponent, HomeComponent, AboutComponent],
    imports: [
        PagesRoutingModule,
    ],
    providers: [],
    entryComponents: []
})

export class PagesModule {

}
