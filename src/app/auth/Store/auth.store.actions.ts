import { Action } from '@ngrx/store';

export enum AuthenticationActionsType {
  USER_LOGIN = '[Authentication] User Login',
  USER_LOGIN_SUCCESS = '[Authentication] User Login Success',
  USER_LOGIN_FAIL = '[Authentication] User Login Fail'
}

export class UserLogin implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN;
}

export class UserLoginSuccess implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN_SUCCESS;
}

export class UserLoginFail implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN_FAIL;
}

export type AuthenticationActions =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFail;
