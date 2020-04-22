import { Action } from '@ngrx/store';
import { LoggedInUser, LoginCredentials } from '../models/auth.models';

export enum AuthenticationActionsType {
  USER_LOGIN = '[Authentication] User Login',
  USER_LOGIN_SUCCESS = '[Authentication] User Login Success',
  USER_LOGIN_FAIL = '[Authentication] User Login Fail',
  USER_AUTO_LOGIN = '[Authentication] User Automatic Login',
  USER_LOGOUT = '[Authentication] User Logout'
}

export class UserLogin implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN;
  constructor(
    public payload: LoginCredentials
  ) { }
}

export class UserLoginSuccess implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN_SUCCESS;
  constructor(
    public payload: { userDetails: LoggedInUser, isRedirect: boolean }
  ) { }
}

export class UserLoginFail implements Action {
  readonly type = AuthenticationActionsType.USER_LOGIN_FAIL;
  constructor(
    public payload: { errorMessage: string }
  ) { }
}

export class UserAutomaticLogIn implements Action {
  readonly type = AuthenticationActionsType.USER_AUTO_LOGIN;
}

export class UserLogout implements Action {
  readonly type = AuthenticationActionsType.USER_LOGOUT;
}


export type AuthenticationActions =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFail
  | UserLogout
  | UserAutomaticLogIn;
