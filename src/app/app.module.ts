import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {AppMaterialModule} from './_shared/modules/app-material.module';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularRaveModule} from 'angular-rave';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarModule,
    AngularRaveModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
