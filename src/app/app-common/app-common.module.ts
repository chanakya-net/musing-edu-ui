import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { DialogsComponent } from './dialogs/dialogs.component';



@NgModule({
  declarations: [LoadingComponent, DialogsComponent],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule { }
