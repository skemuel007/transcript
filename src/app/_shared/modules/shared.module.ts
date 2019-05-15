import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularRaveModule} from 'angular-rave';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule,
        AngularRaveModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule,
        AngularRaveModule
    ]
})

export class SharedModule {

}
