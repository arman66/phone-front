import { Component, OnInit } from '@angular/core';

import { PhoneApiService, Phone } from '../services/phone-api.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[] = [];

  constructor(private phoneThang: PhoneApiService) { }

  ngOnInit() {
      this.phoneThang.getPhones()
        .then((phoneResults: Phone[]) => {
            // THE MAGIC HAPPENS HERE
            // (assign API results to component property)
            this.phones = phoneResults;
        })
        .catch((err) => {
            alert("Sorry! Something went wrong.");
            console.log("Phone List Error");
            console.log(err);
        });
  } // ngOnInit()

}
