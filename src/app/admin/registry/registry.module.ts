import {NgModule} from '@angular/core';
import { RegistryComponent } from './registry.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppMaterialModule} from '../../_shared/modules/app-material.module';
import {SharedModule} from '../../_shared/modules/shared.module';
import {RegistryRoutingModule} from './registry-routing.module';

@NgModule({
    declarations: [RegistryComponent, HeaderComponent, FooterComponent, DashboardComponent],
    imports: [
        AppMaterialModule,
        SharedModule,
        RegistryRoutingModule
    ],
    providers: [],
    entryComponents: []
})

export class RegistryModule{}
