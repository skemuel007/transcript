import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../_shared/modules/shared.module';
import {AppMaterialModule} from '../_shared/modules/app-material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        AppMaterialModule
    ],
    providers: [],
    entryComponents: []
})

export class ApplicationModule {}
