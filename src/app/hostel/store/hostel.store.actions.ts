import { HostelActionsType } from './hostel.store.actions.types';
import { Action } from '@ngrx/store';
import { HostelSetup } from '../models/hostel.model';

export class AddNewHotel implements Action {
  readonly type = HostelActionsType.HOSTEL_ADD;
  constructor(public payload: HostelSetup) {}
}

export class GetHostelList implements Action {
  readonly type = HostelActionsType.HOSTEL_GET_ALL;
}

export class GetHostelByID implements Action {
  readonly type = HostelActionsType.HOSTEL_SELECT_BY_ID;
  constructor(public payload: HostelSetup) {}
}

export class GetHostelByName implements Action {
  readonly type = HostelActionsType.HOSTEL_SELECT_BY_NAME;
  constructor(public payload: HostelSetup) {}
}

export type HostelActions =
  | AddNewHotel
  | GetHostelList
  | GetHostelByID
  | GetHostelByName;
