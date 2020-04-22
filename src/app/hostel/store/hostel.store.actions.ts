import { HostelActionsType } from './hostel.store.actions.types';
import { Action } from '@ngrx/store';

export class GetCurrentHostel implements Action {
  readonly type = HostelActionsType.HOSTEL_GET_CURRENT;
  constructor(public payload: { hostelId: number }) { }
}
