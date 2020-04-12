import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoggedInUser } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})

export class AuthTokenService {
  TOKEN_KEY = 'JWT_TOKEN';
  private tokenHelper = new JwtHelperService();
  constructor() { }

  SaveUserToken(userToken) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(userToken));
  }

  getUserDataFromToken(): LoggedInUser {
    if (this.CheckIfTokenValid()) {
      const userData = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
      const data: LoggedInUser = {
        id: userData.payload.id,
        userName: userData.payload.userName,
        firstName: userData.payload.firstName,
        lastName: userData.payload.lastName,
        mailId: userData.payload.mailId,
        contactNumber: userData.payload.contactNumber,
        roles: userData.payload.roles,
        token: userData.payload.token
      };
      return (data);
    } else {
      return null;
    }
  }

  getPureToken() {
    try {
      if (localStorage.getItem(this.TOKEN_KEY) != null) {
        const userData = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
        return userData.token;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  CheckIfTokenValid() {
    try {
      const tokenData = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
      if (tokenData != null) {
        return !this.tokenHelper.isTokenExpired(tokenData.payload.token);
      } else {
        return false;
      }
    } catch (e) {
      console.log('Invalid token data');
    }
    return false;
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
