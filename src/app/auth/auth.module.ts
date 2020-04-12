import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModules } from '../material.module';
import { AppCommonModule } from '../app-common/app-common.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    MaterialModules,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    AppCommonModule
  ]
})
export class AuthModule { }
