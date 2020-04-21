import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelDashBoardComponent } from './hostel-dash-board/hostel-dash-board.component';
import { HostelRoutingModule } from './hostel-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { MaterialModules } from '../material.module';



@NgModule({
  declarations: [HostelDashBoardComponent],
  imports: [
    MaterialModules,
    CommonModule,
    HostelRoutingModule,
    CommonModule,
    AppCommonModule,
  ]
})
export class HostelModule { }
