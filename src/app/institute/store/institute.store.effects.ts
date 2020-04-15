import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of, from } from 'rxjs';

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

  @Effect()
  updateInstitute = this.actions$.pipe(
    ofType(fromActions.InstituteActionsType.UPDATE_INSTITUTE),
    switchMap(
      (instituteData: fromActions.UpdateInstitute) => {
        return this.instituteHttpService.updateInstitute(instituteData.payload).pipe(
          map(
            res => {
              return this.handleUpdateInstituteSuccess(res);
            }
          ), catchError(err => {
            return this.handleUpdateInstituteFail(err);
          })
        );
      }
    )
  );




  handleSelectInstituteSuccess(data: Institute) {
    return new fromActions.SelectInstituteSuccess(data);
  }
  handleSelectInstituteFail(error: HttpResponse<any>) {
    console.log(error);
    return of(new fromActions.SelectInstituteFail('Some Error Message'));
  }

  handleUpdateInstituteSuccess(data: Institute) {

    return new fromActions.UpdateInstituteSuccess(data);
  }

  handleUpdateInstituteFail(error: HttpResponse<any>) {
    console.log(error);
    return of(new fromActions.UpdateInstituteFail('Some error message'));
  }
}
