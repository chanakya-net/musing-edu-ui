import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { SetupDisplayComponent } from './setup-display/setup-display.component';
import { UpsertInstituteComponent } from './upsert-institute/upsert-institute.component';



@NgModule({
  declarations: [SetupDisplayComponent, UpsertInstituteComponent],
  imports: [
    CommonModule,
    InstituteRoutingModule
  ]
})
export class InstituteModule { }
