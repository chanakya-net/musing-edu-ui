import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FromAuthenticationSelector from '../auth/Store/auth.store.index';
import * as fromApplicationStore from '../AppStore/appstore.global';
import { LoggedInUser } from '../auth/models/auth.models';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  isUserLoggedIn$: Observable<LoggedInUser>;

  constructor(
    private store$: Store<fromApplicationStore.GlobalStore>
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.store$.select(FromAuthenticationSelector.getLoggedInUser);
  }

}
