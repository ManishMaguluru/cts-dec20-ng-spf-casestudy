import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent  implements OnInit{

  constructor(private _service : ContactAppServiceService,private _router : Router,private activatedRoute : ActivatedRoute) { }

  contactId : number = undefined;
  contactName : String = undefined;
  phonenumber : number = undefined;

  ngOnInit(){
    this.activatedRoute.params.subscribe((key : Params) =>this.contactId =key.contactId)
  }

handleEditContact(changedValues : any){
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var profileId = currentUser.profile_id; 
  
  this._service.editContact(changedValues,profileId,this.contactId).subscribe(response => {
    console.log(response); 
  this._router.navigate(["success",profileId]);
  });
}

}
