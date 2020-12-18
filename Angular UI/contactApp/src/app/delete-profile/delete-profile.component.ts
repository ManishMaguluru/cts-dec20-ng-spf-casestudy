import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent {

  constructor(private _service : ContactAppServiceService ,private router : Router){

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var profileId = currentUser.profile_id; 

    this._service.deleteProfile(profileId)
      .subscribe(response =>console.log(response));
  }
 
}
