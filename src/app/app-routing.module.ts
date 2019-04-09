import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {PagesModule} from './pages/pages.module';

const routes: Routes = [
  {
    path: 'pages',
    // loadChildren: () => PagesModule
    loadChildren: './pages/pages.module#PagesModule'

  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
