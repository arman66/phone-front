import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  theUser = new User();

  errorMessage: string;

  constructor(
    private userThang: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  startSignupAjax() {
      this.userThang.postSignup(this.theUser)
        .then(() => {
            this.routerThang.navigate(['/phones']);
        })
        .catch((err) => {
            // alert('Sorry! Something went wrong.');
            const apiResult = err.error;

            this.errorMessage = apiResult.error;

            if (!this.errorMessage) {
              this.errorMessage = "Sorry, y'all. Something went wrong.";
            }
            console.log('Sign up error');
            console.log(err);
        });
  }

}
