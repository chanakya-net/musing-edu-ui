import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginCredentials } from '../models/auth.models';
import * as fromApplicationStore from '../../AppStore/appstore.global';
import * as fromAuthenticationActions from '../Store/auth.store.actions';
import * as fromAuthenticationSelector from '../Store/auth.store.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  isRequestInProgress$: Observable<boolean>;

  errorMessage: string = null;

  constructor(
    private store: Store<fromApplicationStore.GlobalStore>
  ) { }

  ngOnInit(): void {
    this.isRequestInProgress$ = this.store.select(fromAuthenticationSelector.getRequestInProgress);
    this.loginFrom = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit() {
    const authData: LoginCredentials = this.loginFrom.value;
    this.store.dispatch(new fromAuthenticationActions.UserLogin(authData));
  }
}
