import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import * as fromApplicationStore from '../AppStore/appstore.global';
import * as fromAuthenticationSelectors from '../auth/Store/auth.store.index';
import * as fromAuthenticationActions from '../auth/Store/auth.store.actions';
import { Observable } from 'rxjs';
import { LoggedInUser } from '../auth/models/auth.models';



@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  loggedInUserData$: Observable<LoggedInUser>;
  constructor(
    private store$: Store<fromApplicationStore.GlobalStore>
  ) { }

  ngOnInit(): void {
    this.loggedInUserData$ = this.store$.select(fromAuthenticationSelectors.getLoggedInUser);
  }

  onLogout(){
    this.store$.dispatch(new fromAuthenticationActions.UserLogout());
  }
}
