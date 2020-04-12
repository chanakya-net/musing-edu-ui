import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoggedInUser } from './auth/models/auth.models';

import * as fromApplicationStore from './AppStore/appstore.global';
import * as fromAuthenticationSelector from './auth/Store/auth.store.index';
import * as fromAuthenticationActions from './auth/Store/auth.store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'musing-edu';

  isLoggedIn$: Observable<LoggedInUser>;

  constructor(
    private store: Store<fromApplicationStore.GlobalStore>
  ) {

  }
  ngOnInit() {
    this.isLoggedIn$ = this.store.select(fromAuthenticationSelector.getLoggedInUser);
    this.store.dispatch(new fromAuthenticationActions.UserAutomaticLogIn());
  }
}
