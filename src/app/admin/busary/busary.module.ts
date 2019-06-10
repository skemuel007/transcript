import {NgModule} from '@angular/core';
import { BusaryComponent } from './busary.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { HeaderComponent } from './_shared/header/header.component';
import {AppMaterialModule} from '../../_shared/modules/app-material.module';
import {BusaryRoutingModule} from './busary-routing.module';
import {SharedModule} from '../../_shared/modules/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [BusaryComponent, FooterComponent, HeaderComponent, DashboardComponent],
    imports: [
        AppMaterialModule,
        BusaryRoutingModule,
        SharedModule
    ],
    providers: [],
    entryComponents: []
})

export class BusaryModule {}
