import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  static apiRoutes = {
    login: `${ environment.apiUrl }/appusers/login`,
    signup: `${ environment.apiUrl }/appusers`
  }

  static apiMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  }

  static localStorage = {
    token: 'User_Token',
    user: 'User_Data'
  }

  static errorMessages = {
    noEmailExist: 'Invalid Information',
    unknownError: 'Unknown Error, Please try again',
    formError: 'Form Error',
    checkEmail: 'Category with same name exists',
    noteExists: 'Note with same title exists',
    noteVerified: 'Email not verified',
    currentPassword: 'Invalid current password'
  }

  static successMessages = {
    userLoggedIn: 'User has logged in'
  }

}
