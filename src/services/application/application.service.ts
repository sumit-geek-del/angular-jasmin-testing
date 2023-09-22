import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  API_URL:string = 'http://localhost:3000'
  constructor(private _http:HttpClient) { }

  generateApplicationToken(generateAppTokenDTO:any, token:string):Observable<any>{
    
  const headers = new HttpHeaders({
    'x-authorisation-token':token
  });
   
    return this._http.post(`${this.API_URL}/access-application`, generateAppTokenDTO, {headers:headers});
  }
}
