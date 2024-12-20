import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from '../../../shared/constant/constant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storageKey = ConstantService.localStorageKeys.token;
  userDataKey = ConstantService.localStorageKeys.userData;
  logout_success?: string;
  logout_msg?: string;

  constructor(
    private router: Router
  ) { }

  /**
   * This function is used to logout a user and navigate to login page
   */
  logoutUser() {
    localStorage.clear();
    this.removeToken();

    this.router.navigate(['/login'])
  }

  /**
   * This function is used to get the token key that the user gets when he logs in
   */
  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  /**
   * this function is used to set the Token key when the user logs in
   * @param token #string
   */
  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  /**
   * This function is used to delete the token from local storage
   */
  removeToken() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userDataKey);
  }


}
