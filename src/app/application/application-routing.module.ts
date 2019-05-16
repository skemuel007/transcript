import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationComponent} from './application.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApplyComponent} from './apply/apply.component';
import {PaymentHistoryComponent} from './payment-history/payment-history.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from '../_shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'dashboard', component: DashboardComponent, data: { title: 'Bowen Transcript - Dashboard'}
            },
            {
                path: 'apply', component: ApplyComponent, data: { title: 'Bowen Transcript - Apply for Transcript'}
            },
            {
                path: 'payment-history', component: PaymentHistoryComponent, data: { title: 'Bowen Transcript - Payment History'}
            },
            {
                path: 'profile', component: ProfileComponent, data: { title : 'Bowen Transcript - User Profile'}
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
