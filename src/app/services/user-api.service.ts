import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class User {
  // sign up form
  fullName: string;

  // sign up & log in forms
  username: string;
  password: string;

  // assigned by the database
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThang: HttpClient) { }

  // POST /api/signup
  postSignup(userInfo: User) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup`,
          userInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  // POST /api/login
  postLogin(userInfo: User) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login`,
          userInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.userInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  // DELETE /api/logout

  // GET /api/checklogin

}
