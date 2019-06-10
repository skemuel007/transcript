import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../../_shared/guards/auth.guard';
import {BusaryComponent} from './busary.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: BusaryComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'dashboard', component: DashboardComponent, data: { title: 'Bowen Transcript - Dashboard'}
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

export class BusaryRoutingModule {}
