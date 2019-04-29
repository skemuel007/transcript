import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {ApplicationComponent} from './application.component';

const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [

        ]
    }

];

@NgModule({
    imports: [],
    exports: []
})

export class ApplicationRoutingModule { }
