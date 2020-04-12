import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApplicationStore from '../../../AppStore/appstore.global';
import * as fromAuthenticationActions from '../../Store/auth.store.index';
import { take, map } from 'rxjs/operators';
import { PreviousRouteServiceService } from 'src/app/services/previous-route-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuardService {

  constructor(
    private router: Router,
    private store: Store<fromApplicationStore.GlobalStore>,
    private previousRouteService: PreviousRouteServiceService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    boolean | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(fromAuthenticationActions.getLoggedInUser).pipe(
      take(1),
      map(
        (authstate) => {
          return authstate;
        }),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return this.router.createUrlTree([this.previousRouteService.getPreviousUrl()]);
        }
        return true;
      })
    );
  }

}
