import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactAppServiceService {

  users : any =[];
  constructor(private _http : HttpClient) { }

  save(formValue : any) : Observable<any> {
    let uri = "http://localhost:9090/user";
    return this._http.post(uri, formValue);
  }
  authenticate(id : number, password : string) : Observable<any> {
    let uri = `http://localhost:9090/user/login/${id}/${password}`;
    return this._http.post(uri, {});
  }

  addContact(formValues,profileId) : Observable<any>{
    let uri = `http://localhost:9090/user/contacts/${profileId}`;
    return this._http.post(uri,formValues);
  }

  fetchAllContacts(id:number) : Observable<any> {
    let uri = `http://localhost:9090/user/contacts/${id}`;
    return this._http.get(uri);
  }
  editContact(changedValues : any,profileId : number,contactId : number) : Observable<any>{
    let uri = `http://localhost:9090/user/contacts/${profileId}/${contactId}`;
    return this._http.post(uri,changedValues);
  }

  editProfile(changedValues : any,id : number) : Observable<any>{
    let uri = `http://localhost:9090/user/${id}`;
    return this._http.put(uri,changedValues);
  }

  deleteProfile(profile_id : number) : Observable<any>{
    let uri = `http://localhost:9090/user/${profile_id}`;
    return this._http.delete(uri);
  }


}
