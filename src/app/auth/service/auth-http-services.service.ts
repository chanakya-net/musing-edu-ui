import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials, LoggedInUser } from '../models/auth.models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpServicesService {

  constructor(
    private http: HttpClient
  ) { }

  loginUserService(authData: LoginCredentials): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(environment.baseUrl + 'api/auth/Login', authData);
  }
}
