import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (
    private userThang: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
      this.userThang.getCheckLogin()
        // no ".then()" because "getCheckLogin()"
        // already has the ".then()" that what we need
        .catch((err) => {
            alert("Sorry! Something went wrong.");
            console.log("Check Login Error");
            console.log(err);
        });
  }

  startLogOutAjax() {
      this.userThang.logout()
        .then(() => {
            this.routerThang.navigate(['/']);
        })
        .catch((err) => {
            alert("Sorry! Something went wrong.");
            console.log("Log Out Error");
            console.log(err);
        });
  }
}
