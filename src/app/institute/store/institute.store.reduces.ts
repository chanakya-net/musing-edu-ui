import * as fromInstituteModel from '../models/institute.model';
import * as fromInstituteActions from './institute.store.actions';
import { Service } from '../models/institute.model';




export interface InstituteState {
  instituteService: Service;
  instituteServices: Service[];
  currentSelectedInstitute: fromInstituteModel.Institute;
  isRequestInProgress: boolean;
  errorMessage: string;
  successMessage: string;
  isServiceRequestInProgress: boolean;
}

export const initialState: InstituteState = {
  instituteService: null,
  instituteServices: null,
  currentSelectedInstitute: null,
  isRequestInProgress: false,
  errorMessage: null,
  successMessage: null,
  isServiceRequestInProgress: false
};

export function InstituteReducer(state = initialState, action: fromInstituteActions.InstituteActions): InstituteState {
  switch (action.type) {
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE:
      return {
        ...state,
        isRequestInProgress: true,
        errorMessage: null,
        successMessage: null,
        isServiceRequestInProgress: false
      };
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE_SUCCESS:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_SUCCESS:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE_SUCCESS:
      return {
        ...state,
        currentSelectedInstitute: action.payload.institute,
        isRequestInProgress: false,
        errorMessage: null,
        successMessage: action.payload.successMessage
      };
    case fromInstituteActions.InstituteActionsType.ADD_INSTITUTE_FAIL:
    case fromInstituteActions.InstituteActionsType.SELECT_INSTITUTE_FAIL:
    case fromInstituteActions.InstituteActionsType.UPDATE_INSTITUTE_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isRequestInProgress: false,
        successMessage: null
      };
    case fromInstituteActions.InstituteActionsType.ADD_SERVICE:
      return {
        ...state,
        isRequestInProgress: true,
        errorMessage: null,
        successMessage: null
      };
    case fromInstituteActions.InstituteActionsType.ADD_SERVICE_SUCCESS:
      const tempServiceArray = [...state.instituteServices, action.payload.serviceData];
      return {
        ...state,
        instituteService: action.payload.serviceData,
        isRequestInProgress: false,
        successMessage: action.payload.successMessage,
        errorMessage: null,
        instituteServices: tempServiceArray
      };
    case fromInstituteActions.InstituteActionsType.ADD_SERVICE_FAIL:
      return {
        ...state,
        isRequestInProgress: false,
        successMessage: null,
        errorMessage: action.payload.errorMessage,
        instituteService: null
      };
    case fromInstituteActions.InstituteActionsType.SELECT_SERVICES:
      return {
        ...state,
        isServiceRequestInProgress: true,
        successMessage: null,
        errorMessage: null,
        instituteServices: null,
      };
    case fromInstituteActions.InstituteActionsType.SELECT_SERVICES_SUCCESS:
      return {
        ...state,
        instituteServices: action.payload.servicesData,
        isServiceRequestInProgress: false,
        successMessage: action.payload.successMessage,
        errorMessage: null,
        instituteService: null
      };
    case fromInstituteActions.InstituteActionsType.SELECT_SERVICES_FAIL:
      return {
        ...state,
        successMessage: null,
        isServiceRequestInProgress: false,
        instituteService: null,
        instituteServices: null,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
}

