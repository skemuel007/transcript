import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {ProceduresComponent} from './procedures/procedures.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {title: 'Home'}
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {title: 'About'}
            },
            {
                path: 'contact-us',
                component: ContactUsComponent,
                data: { title : 'Contact Us'}

            },
            {
                path: 'delivery',
                component: DeliveryComponent,
                data: {title: 'Delivery Options'}
            },
            {
                path: 'procedures',
                component: ProceduresComponent,
                data: {title : 'Payment Procedures'}
            },
            {
                path: 'faq',
                component: FaqComponent,
                data: {title: 'Frequently Asked Questions'}
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
