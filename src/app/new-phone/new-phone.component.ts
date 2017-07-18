import { Component, OnInit } from '@angular/core';
import { PhoneService } from './../phone.service';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.css']
})
export class NewPhoneComponent implements OnInit {
  newPhone: Object = {};

  // brand: String;
  // name: String;
  // specs: Array<String>;
  // image: String;

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {}

  //this is called in new-phone-component.html
  // createNewPhone(formData){
  //   console.log(formData);
  //   this.brand = formData.form.controls.brand._value;
  //   this.name = formData.form.controls.name._value;
  //   this.image = formData.form.controls.image._value;
  //   this.specs = formData.form.controls.specs._value.split(",");
  //   this.sendNewPhoneToApi();

  sendNewPhoneToApi(){

    this.myPhoneService.createNew(this.newPhone).subscribe(()=>{
      this.newPhone ={
        brand: "",
        name : "",
        specs: [],
        image: "",
        newPhone: {}
      }
    });
  }
}
