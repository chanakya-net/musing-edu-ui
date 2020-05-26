import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelDashBoardComponent } from './hostel-dash-board/hostel-dash-board.component';
import { ManageBuildingComponent } from './Building/manage-building/manage-building.component';


const routes: Routes = [
  { path: 'dash', component: HostelDashBoardComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'building', component: ManageBuildingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }
