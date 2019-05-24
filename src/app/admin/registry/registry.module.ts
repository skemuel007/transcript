import {NgModule} from '@angular/core';
import { RegistryComponent } from './registry.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [RegistryComponent, HeaderComponent, FooterComponent, DashboardComponent],
    imports: [

    ],
    providers: [],
    entryComponents: []
})

export class RegistryModule{}
