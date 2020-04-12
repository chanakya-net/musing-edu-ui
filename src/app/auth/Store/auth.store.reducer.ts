
import * as FromAuthModels from '../models/auth.models';
import * as FromAuthActions from './auth.store.actions';



export interface AuthenticationState {
  userValidationData: FromAuthModels.LoginCredentials;
  loggedInUserDetails: FromAuthModels.LoggedInUser;
  isRequestInProgress: boolean;
}

export const InitialState: AuthenticationState = {
  userValidationData: null,
  loggedInUserDetails: null,
  isRequestInProgress: false
};


export function AuthReducer(state = InitialState, action: FromAuthActions.AuthenticationActions): AuthenticationState {
  switch (action.type) {
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN:
      return {
        ...state,
        isRequestInProgress: true
      };
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isRequestInProgress: false
      };
    case FromAuthActions.AuthenticationActionsType.USER_LOGIN_FAIL:
      return {
        ...state,
        isRequestInProgress: false
      };
    default:
      return {
        ...state
      };
  }
}
