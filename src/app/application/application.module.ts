import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../_shared/modules/shared.module';
import {AppMaterialModule} from '../_shared/modules/app-material.module';
import { ApplicationComponent } from './application.component';
import {ApplicationRoutingModule} from './application-routing.module';

@NgModule({
    declarations: [ApplicationComponent],
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
