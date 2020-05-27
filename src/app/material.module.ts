import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule
  ],
})
export class MaterialModules { }
