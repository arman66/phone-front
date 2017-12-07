import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhoneApiService, Phone } from '../services/phone-api.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneInfo = new Phone();

  constructor(
    private activatedThang: ActivatedRoute,
    private phoneThang: PhoneApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
      // get the URL parameters of this route
      this.activatedThang.params.subscribe((myReqParams) => {
              // { path: 'phones/:id'
              //                  |
          console.log(myReqParams.id);

          this.startAjaxCall(myReqParams.id);
      });
  } // ngOnInit()

  startAjaxCall(urlId) {
      this.phoneThang.getOnePhone(urlId)
        .then((phoneResult: Phone) => {
            // THE MAGIC HAPPENS HERE
            // (assign API results to component property)
            this.phoneInfo = phoneResult;
        })
        .catch((err) =>{
            alert("Sorry! Something went wrong.");
            console.log("Phone Details Error");
            console.log(err);
        });
  } // startAjaxCall()

  startDeleteAjax() {
      if (!confirm('Are you sure?')) {
          return;
      }

      this.phoneThang.deleteOnePhone(this.phoneInfo._id)
        .then(() => {
            // redirect with the Angular router to list of phones
            this.routerThang.navigate(['/phones']);
        })
        .catch((err) =>{
            alert("Sorry! Something went wrong.");
            console.log("Phone Delete Error");
            console.log(err);
        });
  } // startDeleteAjax()

}
