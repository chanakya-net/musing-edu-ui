import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthStore from '../auth/Store/auth.store.reducer';


export interface GlobalStore {
  Authentication: fromAuthStore.AuthenticationState;
}

export const GlobalReducer: ActionReducerMap<GlobalStore> = {
  Authentication: fromAuthStore.AuthReducer
};
