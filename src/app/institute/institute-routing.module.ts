import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupDisplayComponent } from './setup-display/setup-display.component';
import { UpsertInstituteComponent } from './upsert-institute/upsert-institute.component';


const routes: Routes = [
  { path: 'dash', component: SetupDisplayComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'edit', component: UpsertInstituteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
