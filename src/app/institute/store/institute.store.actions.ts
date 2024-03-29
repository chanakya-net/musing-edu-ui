import { Action } from '@ngrx/store';
import { Institute, Service } from '../models/institute.model';

export enum InstituteActionsType {
  ADD_INSTITUTE = '[Institute] Add',
  ADD_INSTITUTE_SUCCESS = '[Institute] Add Success',
  ADD_INSTITUTE_FAIL = '[Institute] Add Fail',

  UPDATE_INSTITUTE = '[Institute] Update',
  UPDATE_INSTITUTE_SUCCESS = '[Institute] Update Success',
  UPDATE_INSTITUTE_FAIL = '[Institute] Update Fail',

  SELECT_INSTITUTE = '[Institute] Select',
  SELECT_INSTITUTE_SUCCESS = '[Institute] Select Success',
  SELECT_INSTITUTE_FAIL = '[Institute] Select Fail',

  ADD_SERVICE = '[Institute] Add Service',
  ADD_SERVICE_SUCCESS = '[Institute] Add Service Success',
  ADD_SERVICE_FAIL = '[Institute] Add Service Fail',

  SELECT_SERVICES = '[Institute] Select Services',
  SELECT_SERVICES_SUCCESS = '[Institute] Select Service Success',
  SELECT_SERVICES_FAIL = '[Institute] Select Service Fail',


}

export class AddInstitute implements Action {
  readonly type = InstituteActionsType.ADD_INSTITUTE;
  constructor(
    public payload: Institute
  ) { }
}

export class AddInstituteSuccess implements Action {
  readonly type = InstituteActionsType.ADD_INSTITUTE_SUCCESS;
  constructor(
    public payload: { institute: Institute, successMessage: string }
  ) { }
}

export class AddInstituteFail implements Action {
  readonly type = InstituteActionsType.ADD_INSTITUTE_FAIL;
  constructor(
    public payload: string
  ) { }
}

export class UpdateInstitute implements Action {
  readonly type = InstituteActionsType.UPDATE_INSTITUTE;
  constructor(
    public payload: Institute
  ) { }
}

export class UpdateInstituteSuccess implements Action {
  readonly type = InstituteActionsType.UPDATE_INSTITUTE_SUCCESS;
  constructor(
    public payload: { institute: Institute, successMessage: string }
  ) { }
}

export class UpdateInstituteFail implements Action {
  readonly type = InstituteActionsType.UPDATE_INSTITUTE_FAIL;
  constructor(public payload: string) { }
}


export class SelectInstitute implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE;
}

export class SelectInstituteSuccess implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_SUCCESS;
  constructor(
    public payload: { institute: Institute, successMessage: string }
  ) { }
}

export class SelectInstituteFail implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_FAIL;
  constructor(public payload: string) { }
}

export class AddInstituteService implements Action {
  readonly type = InstituteActionsType.ADD_SERVICE;
  constructor(
    public payload: { serviceData: Service }
  ) { }
}

export class AddInstituteServiceSuccess implements Action {
  readonly type = InstituteActionsType.ADD_SERVICE_SUCCESS;
  constructor(
    public payload: { serviceData: Service, successMessage: string }
  ) { }
}

export class AddInstituteServiceFail implements Action {
  readonly type = InstituteActionsType.ADD_SERVICE_FAIL;
  constructor(
    public payload: { errorMessage: string }
  ) { }
}

export class SelectInstituteServices implements Action {
  readonly type = InstituteActionsType.SELECT_SERVICES;
}

export class SelectInstituteServicesSuccess implements Action {
  readonly type = InstituteActionsType.SELECT_SERVICES_SUCCESS;
  constructor(
    public payload: { servicesData: Service[], successMessage: string }
  ) { }
}

export class SelectInstituteServicesFail implements Action {
  readonly type = InstituteActionsType.SELECT_SERVICES_FAIL;
  constructor(
    public payload: { errorMessage: string }
  ) { }
}

export type InstituteActions =
  | AddInstitute
  | AddInstituteSuccess
  | AddInstituteFail
  | UpdateInstitute
  | UpdateInstituteSuccess
  | UpdateInstituteFail
  | SelectInstitute
  | SelectInstituteSuccess
  | SelectInstituteFail
  | AddInstituteService
  | AddInstituteServiceFail
  | AddInstituteServiceSuccess
  | SelectInstituteServices
  | SelectInstituteServicesFail
  | SelectInstituteServicesSuccess;
