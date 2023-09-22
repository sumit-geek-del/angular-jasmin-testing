import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  portalToken!:string;
  userData!:any;
  constructor() { }

  setPortalUserToken(token:string){
    this.portalToken = token;
  }

  getPortalUserToken():string {
    return this.portalToken;
  }

  setLoggedInUserData(userData:any){
    this.userData = userData;
  }


  getLoggedInUserData():string {
    return this.userData
  }
}
