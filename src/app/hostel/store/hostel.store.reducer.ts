import * as fromHostelAction from './hostel.store.actions';
import * as fromHostelActionType from './hostel.store.actions.types';
import * as fromHostelModels from '../models/hostel.model';

export interface HostelStore {
  hostelDataToAdd: fromHostelModels.HostelSetup;
  hostelList: fromHostelModels.HostelSetup[];
  hostelByIdOrName: fromHostelModels.HostelSetup;
  isRequestInProgress: boolean;
  errorMessage: string;
}

export const InitialHostelState: HostelStore = {
  hostelDataToAdd: null,
  hostelList: null,
  hostelByIdOrName: null,
  isRequestInProgress: false,
  errorMessage: null,
};

export function HostelReducer(
  state = InitialHostelState,
  action: fromHostelAction.HostelActions
): HostelStore {
  switch (action.type) {
    case fromHostelActionType.HostelActionsType.HOSTEL_ADD:
      return {
        ...state,
      };
    case fromHostelActionType.HostelActionsType.HOSTEL_SELECT_BY_ID:
      return {
        ...state,
        hostelByIdOrName: action.payload,
        isRequestInProgress: false,
        errorMessage: null,
      };
    case fromHostelActionType.HostelActionsType.HOSTEL_SELECT_BY_NAME:
      return {
        ...state,
        hostelByIdOrName: action.payload,
        isRequestInProgress: false,
        errorMessage: null,
      };
    default:
      return { ...state };
  }
}
