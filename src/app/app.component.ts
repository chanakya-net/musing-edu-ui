import { Component, OnInit } from '@angular/core';
import * as fromApplicationStore from './AppStore/appstore.global';
import * as FromAuthenticationSelector from './auth/Store/auth.store.index'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoggedInUser } from './auth/models/auth.models';

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
    this.isLoggedIn$ = this.store.select(FromAuthenticationSelector.getLoggedInUser);
  }
}
