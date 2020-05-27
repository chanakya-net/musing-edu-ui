import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { HostelDashBoardComponent } from './hostel-dash-board/hostel-dash-board.component';
import { HostelRoutingModule } from './hostel-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { MaterialModules } from '../material.module';
import { AddNewBuildingComponent } from './building/add-new-building/add-new-building.component';
import { AddNewRoomComponent } from './room/add-new-room/add-new-room.component';
import { AddNewBedComponent } from './bed/add-new-bed/add-new-bed.component';
import { SetupHostelComponent } from './setup-hostel/setup-hostel.component';
import { AddNewHostelComponent } from './add-new-hostel/add-new-hostel.component';



@NgModule({
  declarations: [HostelDashBoardComponent, AddNewBuildingComponent, AddNewRoomComponent, AddNewBedComponent, SetupHostelComponent, AddNewHostelComponent],
  imports: [
    MaterialModules,
    CommonModule,
    HostelRoutingModule,
    CommonModule,
    AppCommonModule,
    ChartsModule,
  ],
})
export class HostelModule { }
