import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        ToastrModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {

}
