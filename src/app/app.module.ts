import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Be sure to import these and add to to list of imports below
import { FormsModule} from '@angular/forms'
import { HttpModule, Response } from '@angular/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';

//needed for service - a singleton because it is in app.module
import {PhoneService} from './phone.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    NewPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PhoneService],  //needed for service,
  bootstrap: [AppComponent]
})
export class AppModule { }
