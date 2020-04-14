import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './pipes/pipe.enum.to.array';



@NgModule({
  declarations: [LoadingComponent,
    DialogsComponent,
    EnumToArrayPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    DialogsComponent,
    ReactiveFormsModule,
    EnumToArrayPipe
  ]
})
export class AppCommonModule { }
