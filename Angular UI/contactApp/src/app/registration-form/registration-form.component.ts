import { Component, OnInit } from '@angular/core';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent{

  username : String = undefined;
  password : string = undefined;
  phonenumber : number = undefined;
  dob : Date = undefined;

  message : string = undefined;

  constructor(private _service : ContactAppServiceService){}

  handleSave(formValue : any) {
    this._service.save(formValue).subscribe(response => this.message = 'Your login id is'+response.profile_id);
  }

}
