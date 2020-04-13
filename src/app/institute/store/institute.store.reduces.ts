import * as fromInstituteModel from '../models/institute.model';
import * as fromInstituteActions from './institute.store.actions';



export interface InstituteState {
  currentSelectedInstitute: fromInstituteModel.Institute;
  isRequestInProgress: boolean;
  errorMessage: string;
}

export const initialState: InstituteState = {
  currentSelectedInstitute: null,
  isRequestInProgress: false,
  errorMessage: null
};

export function InstituteReducer(state = initialState, action: fromInstituteActions.InstituteActions): InstituteState {
  switch (action.type) {
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE:
      return {
        ...state,
        currentSelectedInstitute: null,
        isRequestInProgress: true,
        errorMessage: null
      };
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE_SUCCESS:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_SUCCESS:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE_SUCCESS:
      return {
        ...state,
        currentSelectedInstitute: action.payload,
        isRequestInProgress: false,
        errorMessage: null
      };
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE_FAIL:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_FAIL:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE_FAIL:
      return {
        ...state,
        currentSelectedInstitute: null,
        errorMessage: action.payload,
        isRequestInProgress: false
      };
    default:
      return state;
  }
}

