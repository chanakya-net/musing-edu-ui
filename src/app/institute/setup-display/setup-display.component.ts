import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromInstituteActions from '../store/institute.store.actions';
import * as fromInstituteSelectors from '../store/institute.store.selector';
import * as fromInstituteReducers from '../store/institute.store.reduces';
import { Institute } from '../models/institute.model';


@Component({
  selector: 'app-setup-display',
  templateUrl: './setup-display.component.html',
  styleUrls: ['./setup-display.component.scss']
})
export class SetupDisplayComponent implements OnInit {

  currentInstitute$: Observable<Institute>;

  constructor(private store$: Store<fromInstituteReducers.InstituteState>) { }

  ngOnInit(): void {
    this.store$.dispatch(new fromInstituteActions.SelectInstitute());
    this.currentInstitute$ = this.store$.select(fromInstituteSelectors.GetCurrentInstitute);
  }

}
