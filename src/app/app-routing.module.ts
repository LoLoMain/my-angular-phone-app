import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';

export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'new-phone', component: NewPhoneComponent},
  //'**' must always be last otherwise you will always be redirected
  { path: '**', redirectTo: '' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
