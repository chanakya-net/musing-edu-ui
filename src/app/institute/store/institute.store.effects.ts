import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of, from } from 'rxjs';

import * as fromActions from './institute.store.actions';
import { InstituteHttpService } from '../service/institute-http.service';
import { Institute, Service } from '../models/institute.model';
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
  addInstituteService = this.actions$.pipe(
    ofType(fromActions.InstituteActionsType.ADD_SERVICE),
    switchMap((data: fromActions.AddInstituteService) => {
      return this.instituteHttpService.addNewInstituteService(data.payload.serviceData).pipe(
        map(retData => {
          return this.handleAddInstituteServiceSuccess(retData);
        }), catchError(errRes => {
          return this.handleAddInstituteServiceFail(errRes);
        })
      );
    })
  );

  @Effect()
  selectAllInstituteService = this.actions$.pipe(
    ofType(fromActions.InstituteActionsType.SELECT_SERVICES),
    switchMap(() => {
      return this.instituteHttpService.selectAllInstituteServices().pipe(
        map(retRes => {
          return this.handleInstituteSelectAllServicesSuccess(retRes);
        }), catchError(errRes => {
          return this.handledInstituteSelectAllServicesFail(errRes);
        })
      );
    })
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
    return new fromActions.SelectInstituteSuccess({ institute: data, successMessage: null });
  }
  handleSelectInstituteFail(error: HttpResponse<any>) {
    console.log(error);
    return of(new fromActions.SelectInstituteFail('Some Error Message'));
  }

  handleUpdateInstituteSuccess(data: Institute) {

    return new fromActions.UpdateInstituteSuccess({ institute: data, successMessage: 'Updated Institute information' });
  }

  handleUpdateInstituteFail(error: HttpResponse<any>) {
    console.log(error);
    return of(new fromActions.UpdateInstituteFail('Some error message'));
  }

  handleAddInstituteServiceSuccess(data: Service) {
    return new fromActions.AddInstituteServiceSuccess({ serviceData: data, successMessage: 'Added new service' });
  }

  handleAddInstituteServiceFail(error: HttpResponse<any>) {
    return of(new fromActions.AddInstituteServiceFail({ errorMessage: 'Some error to display' }));
  }

  handleInstituteSelectAllServicesSuccess(data: Service[]) {
    return new fromActions.SelectInstituteServicesSuccess({ servicesData: data, successMessage: 'Selected all services' });
  }

  handledInstituteSelectAllServicesFail(error: HttpResponse<any>) {
    return of(new fromActions.SelectInstituteServicesFail({ errorMessage: 'Some error to display' }));
  }

}
