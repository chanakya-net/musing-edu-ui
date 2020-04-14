import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromInstituteActions.SelectInstitute());
    this.isRequestInProgress$ = this.store.select(fromInstituteSelectors.GetHttpRequestProgress);
    this.store.select(fromInstituteSelectors.GetCurrentInstitute).subscribe(data => {
      this.instituteData = data;
      if (data) {
        this.createInputForm();
      }
      console.log(this.instituteData);
    }
    );

  }

  createInputForm() {
    console.log('creating form');
    this.instituteForm = this.formBuilder.group(
      {
        address: [this.instituteData.address, Validators.required],
        city: [this.instituteData.city, Validators.required],
        pin: [this.instituteData.pin, Validators.required],
        contactNumbers: [this.instituteData.contactNumbers, Validators.required],
        mailId: [this.instituteData.mailId, Validators.required],
        website: [this.instituteData.website, Validators.required],
        allowedGender: [this.instituteData.allowedGender, Validators.required]
      }
    );
  }

  onSubmit() {
    const data = this.instituteForm.value;
    data.id = this.instituteData.id;
    data.name = this.instituteData.name;
    data.establishedOn = this.instituteData.establishedOn;
    this.store.dispatch(new fromInstituteActions.UpdateInstitute(data));
  }

}
