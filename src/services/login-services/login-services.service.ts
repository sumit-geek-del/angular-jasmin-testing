import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  API_URL:string = 'http://localhost:3000';
  constructor(private _http:HttpClient) { }

  loginPortalUser(loginUserDTO:any):Promise<any>{
    return lastValueFrom(this._http.post<any>(`${this.API_URL}/portal-user/login`, loginUserDTO));
  }
}
