import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  loginId :  number = undefined; 
  

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe((key : Params) =>this.loginId =key.profileId)
    
    localStorage.setItem('currentUser',JSON.stringify({profile_id : this.loginId }));
  }



}
