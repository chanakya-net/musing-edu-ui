import { Action } from '@ngrx/store';
import { Institute } from '../models/institute.model';

export enum InstituteActionsType {
  ADD_INSTITUTE = '[Institute] Add',
  ADD_INSTITUTE_SUCCESS = '[Institute] Add Success',
  ADD_INSTITUTE_FAIL = '[Institute] Add Fail',

  UPDATE_INSTITUTE = '[Institute] Update',
  UPDATE_INSTITUTE_SUCCESS = '[Institute] Update Success',
  UPDATE_INSTITUTE_FAIL = '[Institute] Update Success',

  SELECT_INSTITUTE_BY_ID = '[Institute] Select By Id',
  SELECT_INSTITUTE_BY_ID_SUCCESS = '[Institute] Select By Id Success',
  SELECT_INSTITUTE_BY_ID_FAIL = '[Institute] Select By Id Fail',

  SELECT_INSTITUTE_ALL = '[Institute] Select All',
  SELECT_INSTITUTE_ALL_SUCCESS = '[Institute] Select All Success',
  SELECT_INSTITUTE_ALL_Fail = '[Institute] Select All Fail'

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


export class SelectInstituteById implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_BY_ID;
  constructor(
    public payload: number
  ) { }
}

export class SelectInstituteByIdSuccess implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_BY_ID_SUCCESS;
  constructor(
    public payload: Institute
  ) { }
}

export class SelectInstituteByIdFail implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_BY_ID_FAIL;
  constructor(public payload: string) { }
}


export class SelectInstituteAll implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_ALL;
}

export class SelectInstituteAllSuccess implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_ALL_SUCCESS;
  constructor(public payload: Institute[]) { }
}

export class SelectInstituteAllFail implements Action {
  readonly type = InstituteActionsType.SELECT_INSTITUTE_ALL_Fail;
  constructor(public payload: string) { }
}


export type InstituteActions =
  | AddInstitute
  | AddInstituteSuccess
  | AddInstituteFail
  | UpdateInstitute
  | UpdateInstituteSuccess
  | UpdateInstituteFail
  | SelectInstituteById
  | SelectInstituteByIdSuccess
  | SelectInstituteByIdFail
  | SelectInstituteAll
  | SelectInstituteAllSuccess
  | SelectInstituteAllFail;
