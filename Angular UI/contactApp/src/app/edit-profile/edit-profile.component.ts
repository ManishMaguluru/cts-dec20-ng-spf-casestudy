import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private _service : ContactAppServiceService,private _router : Router) { }

  password : String = undefined;
  phonenumber : number = undefined;

handleEditProfile(changedValues : any){
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var profileId = currentUser.profile_id; 
  
  this._service.editProfile(changedValues,profileId).subscribe(response => {
    console.log(response); 
  this._router.navigate(["success",profileId]);
  });
}

}
