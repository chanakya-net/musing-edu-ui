import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuthReducers from './Store/auth.store.index';
import { MaterialModules } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    MaterialModules,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('Authentication', fromAuthReducers.AuthenticationReducer)
  ]
})
export class AuthModule { }
