import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactAppServiceService } from '../contact-app-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  id : number = undefined;
  password : string = undefined;

  message : string = "Enter Valid Credentials";
  isinvalid : boolean = true;
  constructor(private _service : ContactAppServiceService, private _router : Router) {}
  
  handleLogin(loginValues : any) {
   
    this._service
    .authenticate(loginValues.id, loginValues.password)
    .subscribe(response => {
      console.log(response); 
      if(response.profile_id != undefined){
        this._router.navigate(["success",loginValues.id]);
      }
      else{
          this.isinvalid = false;
        this._router.navigate(["login"]);
      }
    });
  }
}
