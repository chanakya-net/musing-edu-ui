import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoadingComponent, DialogsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    DialogsComponent,
    ReactiveFormsModule
  ]
})
export class AppCommonModule { }
