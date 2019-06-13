import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Do not and I repeat do not import you feature modules in app module
 * and also when addressing feature modules in your routes use this format,
 * this can save you several hours buddy
 *
 *
 */
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
    path: 'application',
    loadChildren: './application/application.module#ApplicationModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
