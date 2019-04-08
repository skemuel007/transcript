import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {PagesModule} from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PagesModule

  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
