import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAuthStore from './auth.store.reducer';


export interface AuthenticationStore {
  Authentication: fromAuthStore.AuthenticationState;
}

export const AuthenticationReducer: ActionReducerMap<AuthenticationStore> = {
  Authentication: fromAuthStore.AuthReducer
};


const getAuthenticationFeatureState = createFeatureSelector<fromAuthStore.AuthenticationState>('Authentication');

const getLoggedInUser = createSelector(
  getAuthenticationFeatureState,
  state => state.loggedInUserDetails
);

const getRequestInProgress = createSelector(
  getAuthenticationFeatureState,
  state => state.isRequestInProgress
);

const getUserValidationData = createSelector(
  getAuthenticationFeatureState,
  state => state.userValidationData
);
