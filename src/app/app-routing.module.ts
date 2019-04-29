import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
