import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import * as fromInstituteSelectors from '../store/institute.store.selector';
import * as fromInstituteActions from '../store/institute.store.actions';
import * as fromInstituteReducers from '../store/institute.store.reduces';
import { Institute } from '../models/institute.model';
import { AcceptedGender } from '../../app-common/models/app.common.models';




@Component({
  selector: 'app-upsert-institute',
  templateUrl: './upsert-institute.component.html',
  styleUrls: ['./upsert-institute.component.scss'],
})
export class UpsertInstituteComponent implements OnInit {
  genders = AcceptedGender;
  instituteForm: FormGroup;
  isRequestInProgress$: Observable<boolean>;
  instituteData: Institute;

  constructor(
    private store: Store<fromInstituteReducers.InstituteState>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createInputForm();
    this.store.dispatch(new fromInstituteActions.SelectInstitute());
    this.isRequestInProgress$ = this.store.select(fromInstituteSelectors.GetHttpRequestProgress);
    this.store.select(fromInstituteSelectors.GetCurrentInstitute).subscribe(data => {
      this.instituteData = data;
      if (data) {
        this.setFormData(data);
      }
    }
    );
    this.store.select(fromInstituteSelectors.GetSuccessMessage).subscribe(data => {
      if (data) {
        this.openSnackBar(data, 'Ok', 'top');
      }

    });
  }

  createInputForm() {
    console.log('creating form institute');
    this.instituteForm = this.formBuilder.group(
      {
        address: [null, Validators.required],
        city: [null, Validators.required],
        pin: [null, Validators.required],
        contactNumbers: [null, Validators.required],
        mailId: [null, Validators.required],
        website: [null, Validators.required],
        allowedGender: [null, Validators.required]
      }
    );
  }

  onSubmitInstitute() {
    const data = this.instituteForm.value;
    data.id = this.instituteData.id;
    data.name = this.instituteData.name;
    data.establishedOn = this.instituteData.establishedOn;
    this.store.dispatch(new fromInstituteActions.UpdateInstitute(data));
  }

  private setFormData(data: Institute) {
    this.instituteForm.get('address').setValue(data.address);
    this.instituteForm.get('city').setValue(data.city);
    this.instituteForm.get('pin').setValue(data.pin);
    this.instituteForm.get('contactNumbers').setValue(data.contactNumbers);
    this.instituteForm.get('mailId').setValue(data.mailId);
    this.instituteForm.get('website').setValue(data.website);
    this.instituteForm.get('allowedGender').setValue(data.allowedGender);
  }

  openSnackBar(message: string, action: string, position: MatSnackBarVerticalPosition = 'bottom') {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: position,
      panelClass: ['successPanel']
    });
  }


}
