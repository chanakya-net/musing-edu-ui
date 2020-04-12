import * as fromInstituteModel from '../models/institute.model';
import * as fromInstituteActions from './institute.store.actions';
export interface InstituteState {
  allInstitute: fromInstituteModel.Institute[];
  currentSelectedInstitute: fromInstituteModel.Institute;
  isRequestInProgress: boolean;
  selectedInstituteId: number;
  errorMessage: string;
}

export const initialState: InstituteState = {
  allInstitute: null,
  currentSelectedInstitute: null,
  isRequestInProgress: false,
  selectedInstituteId: null,
  errorMessage: null
};

export function InstituteReducer(state = initialState, action: fromInstituteActions.InstituteActions) {
  switch (action.type) {
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_ALL:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_BY_ID:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE:
      return {
        ...state,
        isRequestInProgress: true,
        errorMessage: null
      };
    default:
      return state;
  }
}

