import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-view-all-contacts',
  templateUrl: './view-all-contacts.component.html',
  styleUrls: ['./view-all-contacts.component.css']
})
export class ViewAllContactsComponent{

  contacts : any = [];
  contact_id : number = undefined;
  constructor(private _service : ContactAppServiceService ,private router : Router){

    localStorage.setItem('currentContactId',JSON.stringify({contact_id : this.contact_id }));

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var profileId = currentUser.profile_id; 

    this._service.fetchAllContacts(profileId)
      .subscribe(response =>{console.log(response);
        this.contacts = response;
      });
  }
 
  

    
  


}
