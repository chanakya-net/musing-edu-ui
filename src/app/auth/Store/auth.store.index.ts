import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAuthStore from './auth.store.reducer';


export interface AuthenticationStore {
  Authentication: fromAuthStore.AuthenticationState;
}

export const AuthenticationReducer: ActionReducerMap<AuthenticationStore> = {
  Authentication: fromAuthStore.AuthReducer
};


const getAuthenticationFeatureState = createFeatureSelector<fromAuthStore.AuthenticationState>('Authentication');

export const getLoggedInUser = createSelector(
  getAuthenticationFeatureState,
  state => state.loggedInUserDetails
);

export const getRequestInProgress = createSelector(
  getAuthenticationFeatureState,
  state => state.isRequestInProgress
);

export const getUserValidationData = createSelector(
  getAuthenticationFeatureState,
  state => state.userValidationData
);

export const getErrorMessage = createSelector(
  getAuthenticationFeatureState,
  state => state.errorMessage
);
