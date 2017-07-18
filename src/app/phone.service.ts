

import { Injectable } from '@angular/core';
//After Creating phone.service.ts
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myhttp: Http) {}

  getList() {
    return this.myhttp.get(`${this.BASE_URL}/api/phones`)
      .map((res) => res.json());
  }

  createNew(newPhonetoCreate){
    return this.myhttp.post(`${this.BASE_URL}/api/phones`, newPhonetoCreate)
      .map((res) => res.json());
  }

}
