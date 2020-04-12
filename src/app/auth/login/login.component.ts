import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromApplicationStore from '../../AppStore/appstore.global';
import * as fromAuthenticationActions from '../Store/auth.store.actions';
import { Store } from '@ngrx/store';
import { LoginCredentials } from '../models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  isRequestInProgress = false;
  errorMessage: string = null;

  constructor(
    private store: Store<fromApplicationStore.GlobalStore>
  ) { }

  ngOnInit(): void {
    this.loginFrom = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit() {
    console.log(this.loginFrom.value);
    const authData: LoginCredentials = this.loginFrom.value;
    this.store.dispatch(new fromAuthenticationActions.UserLogin(authData));
  }
}
