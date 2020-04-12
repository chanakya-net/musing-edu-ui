import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginActivateGuardService } from './login/Guard/login-activate-guard';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginActivateGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
