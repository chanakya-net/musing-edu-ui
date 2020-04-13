import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromInstituteSelectors from '../store/institute.store.selector';
import * as fromInstituteActions from '../store/institute.store.actions';
import * as fromInstituteReducers from '../store/institute.store.reduces';



@Component({
  selector: 'app-upsert-institute',
  templateUrl: './upsert-institute.component.html',
  styleUrls: ['./upsert-institute.component.scss']
})
export class UpsertInstituteComponent implements OnInit {

  instituteForm: FormGroup;
  isRequestInProgress$: Observable<boolean>;

  constructor(
    private store: Store<fromInstituteReducers.InstituteState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromInstituteActions.SelectInstitute());
    this.isRequestInProgress$ = this.store.select(fromInstituteSelectors.GetHttpRequestProgress);
  }

}
