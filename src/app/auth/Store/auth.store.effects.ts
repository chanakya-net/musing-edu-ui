import * as AuthenticationActions from './auth.store.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthHttpServicesService } from '../service/auth-http-services.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { LoggedInUser } from '../models/auth.models';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthTokenService } from '../service/auth-token.service';


@Injectable()
export class AuthenticationEffects {

  constructor(
    private action$: Actions,
    private authService: AuthHttpServicesService,
    private router: Router,
    private tokenHandler: AuthTokenService
  ) { }

  @Effect()
  validateUser = this.action$.pipe(
    ofType(AuthenticationActions.AuthenticationActionsType.USER_LOGIN),
    switchMap((authenticateUserStart: AuthenticationActions.UserLogin) => {
      return this.authService.loginUserService(authenticateUserStart.payload).pipe(
        map(
          res => {
            return this.handleAuthenticationSuccess(res);
          }), catchError(httpRes => {
            console.log(httpRes);
            return this.handleAuthenticationFail(httpRes);
          })
      );
    })
  );

  @Effect({ dispatch: false })
  loggedInUser = this.action$.pipe(
    ofType(AuthenticationActions.AuthenticationActionsType.USER_LOGIN_SUCCESS),
    tap((loggedInUserData: AuthenticationActions.UserLoginSuccess) => {
      if (loggedInUserData) {
        this.tokenHandler.SaveUserToken(loggedInUserData);
        this.router.navigate(['/dashboard']);
      }
    })
  );

  handleAuthenticationSuccess(loggedInUserData: LoggedInUser) {
    return new AuthenticationActions.UserLoginSuccess(loggedInUserData);
  }
  handleAuthenticationFail(error: HttpResponse<any>) {

    return of(new AuthenticationActions.UserLoginFail({ errorMessage: 'errorText' }));
  }

}
