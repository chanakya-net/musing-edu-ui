import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAppStore from '../../AppStore/appstore.global';
import * as fromAuthenticationActions from '../../auth/Store/auth.store.index';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardActiveGuard implements CanActivate {

  constructor(
    private store: Store<fromAppStore.GlobalStore>,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    boolean | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    return this.store.select(fromAuthenticationActions.getLoggedInUser).pipe(
      take(1), map(
        authState => {
          return authState;
        }
      ), map(
        user => {
          if (user != null) {
            return true;
          } else {
            return this.router.createUrlTree(['/login']);
          }
        }
      )
    );
  }
}
