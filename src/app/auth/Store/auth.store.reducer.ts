
import * as FromAuthModels from '../models/auth.models';
import * as FromAuthActions from './auth.store.actions';



export interface AuthenticationState {
  userValidationData: FromAuthModels.LoginCredentials;
  loggedInUserDetails: FromAuthModels.LoggedInUser;
  isRequestInProgress: boolean;
  errorMessage: string;
}

export const InitialState: AuthenticationState = {
  userValidationData: null,
  loggedInUserDetails: null,
  isRequestInProgress: false,
  errorMessage: null
};


export function AuthReducer(state = InitialState, action: FromAuthActions.AuthenticationActions): AuthenticationState {
  switch (action.type) {
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN:
      return {
        ...state,
        userValidationData: action.payload,
        loggedInUserDetails: null,
        isRequestInProgress: true,
        errorMessage: null
      };
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isRequestInProgress: false,
        loggedInUserDetails: action.payload,
        userValidationData: null,
        errorMessage: null
      };
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN_FAIL:
      return {
        ...state,
        isRequestInProgress: false,
        loggedInUserDetails: null,
        errorMessage: action.payload.errorMessage
      };
    case FromAuthActions.AuthenticationActionsType.USER_LOGOUT:
      return {
        ...state,
        isRequestInProgress: false,
        loggedInUserDetails: null,
        userValidationData: null,
        errorMessage: null
      };
    case FromAuthActions.AuthenticationActionsType.USER_AUTO_LOGIN:
      return {
        ...state,
        loggedInUserDetails: null,
        userValidationData: null,
        isRequestInProgress: false,
        errorMessage: null
      };
    default:
      return {
        ...state
      };
  }
}
