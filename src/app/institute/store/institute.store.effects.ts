import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from './institute.store.actions';
import { InstituteHttpService } from '../service/institute-http.service';
import { Institute } from '../models/institute.model';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class InstituteEffects {

  constructor(
    private instituteHttpService: InstituteHttpService,
    private actions$: Actions
  ) {
  }


  @Effect()
  selectInstitute = this.actions$.pipe(
    ofType(fromActions.InstituteActionsType.SELECT_INSTITUTE),
    switchMap(
      () => {
        return this.instituteHttpService.selectInstitute().pipe(
          map(res => {
            return this.handleSelectInstituteSuccess(res);
          }
          ), catchError(HttpRes => {
            console.log(HttpRes);
            return this.handleSelectInstituteFail(HttpRes);
          }
          )
        );
      }
    )
  );

  handleSelectInstituteSuccess(data: Institute) {
    return new fromActions.SelectInstituteSuccess(data);
  }
  handleSelectInstituteFail(error: HttpResponse<any>) {

    return of(new fromActions.SelectInstituteFail('Some Error Message'));
  }

}

