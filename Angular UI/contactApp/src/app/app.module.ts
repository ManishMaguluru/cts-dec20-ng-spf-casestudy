import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import { DeleteContactsComponent } from './delete-contacts/delete-contacts.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccessComponent } from './success/success.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let routes : Routes =[
  {path : "",component : RegistrationFormComponent},
  {path : "register" , component : RegistrationFormComponent},
  {path : "login", component : LoginFormComponent},
  {path : "success/:profileId", component : SuccessComponent},
  {path : "success/:profileId/addContacts" , component : AddContactsComponent},
  {path : "success/:profileId/viewContacts/editContacts",component : EditContactsComponent},
  {path : "success/:profileId/editProfile",component : EditProfileComponent},
  {path : "success/:profileId/deleteContacts" , component : DeleteContactsComponent },
  {path : "success/:profileId/deleteProfile",component : DeleteProfileComponent},
  {path : "success/:profileId/logout",component : LogoutComponent},
  {path : "success/:profileId/viewContacts",component : ViewAllContactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AddContactsComponent,
    ViewAllContactsComponent,
    DeleteContactsComponent,
    DeleteProfileComponent,
    LogoutComponent,
    SuccessComponent,
    EditProfileComponent,
    EditContactsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
