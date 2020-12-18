import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent {

  contactname : String = undefined;
  contactnumber : number = undefined;

  
//  profileId : number = undefined;

  constructor(private _service:ContactAppServiceService, private _router : Router){}

  handleAddContact(contactDetails : any){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var profileId = currentUser.profile_id; 
    
    this._service
    .addContact(contactDetails,profileId)
    .subscribe(response => {
      console.log(response); 
    this._router.navigate(["success",profileId]);
    });

  }



}
