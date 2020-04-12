import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardActiveGuard } from './dashboard/Guard/dashboard.activate.guard';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(l => l.AuthModule) },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardActiveGuard] },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
