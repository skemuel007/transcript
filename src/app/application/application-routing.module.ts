import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from './application.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent, data: {title : 'Dashboard'}
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApplicationRoutingModule { }
