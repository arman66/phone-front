import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private phoneThang: PhoneApiService
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

}
