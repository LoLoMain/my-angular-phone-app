import { Component, OnInit } from '@angular/core';
//import Service
import { PhoneService } from './../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  
})
export class PhoneListComponent implements OnInit {
  phones =[];


  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
      .subscribe((myPhoneList) => {
        this.phones = myPhoneList; //myPhoneList is what you get back from your http call, we are going to save this in the phones array
      });
  }
}
