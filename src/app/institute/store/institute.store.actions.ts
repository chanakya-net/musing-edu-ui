import { Action } from '@ngrx/store';
import { Institute } from '../models/institute.model';

export enum InstituteActionsType {
  ADD_INSTITUTE = '[Institute] Add',
  ADD_INSTITUTE_SUCCESS = '[Institute] Add Success',
  ADD_INSTITUTE_FAIL = '[Institute] Add Fail',

  UPDATE_INSTITUTE = '[Institute] Update',
  UPDATE_INSTITUTE_SUCCESS = '[Institute] Update Success',
  UPDATE_INSTITUTE_FAIL = '[Institute] Update Fail',

  SELECT_INSTITUTE = '[Institute] Select',
  SELECT_INSTITUTE_SUCCESS = '[Institute] Select Success',
  SELECT_INSTITUTE_FAIL = '[Institute] Select Fail'

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
    public payload: Institute
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
  constructor(public payload: Institute) { }
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
    public payload: Institute
  ) { }
}

export class SelectInstituteFail implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_FAIL;
  constructor(public payload: string) { }
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
  | SelectInstituteFail;
