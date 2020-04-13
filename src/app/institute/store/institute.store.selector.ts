import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromInstitute from './institute.store.reduces';
import * as fromInstituteReducers from './institute.store.reduces';



const getInstituteSelector = createFeatureSelector<fromInstituteReducers.InstituteState>('Institute');

export const GetCurrentInstitute = createSelector(
  getInstituteSelector,
  state => state.currentSelectedInstitute
);

export const GetHttpRequestProgress = createSelector(
  getInstituteSelector,
  state => state.isRequestInProgress
);

export const GetErrorMessage = createSelector(
  getInstituteSelector,
  state => state.errorMessage
);
