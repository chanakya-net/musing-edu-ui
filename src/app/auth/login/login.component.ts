import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  isRequestInProgress = false;
  errorMessage: string = null;

  constructor() { }

  ngOnInit(): void {
    this.loginFrom = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit() {
    console.log(this.loginFrom);
  }
}
