import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/services/application/application.service';
import { CredentialsService } from 'src/services/credential/credentials.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedInUserName!:string | null;

  applicationUrl:Array<any> = [
    {
    serviceName:'app1', url:'http://localhost:55451'
  }, {
    serviceName:'app2', url:'http://localhost:55471'
  } ]

  constructor(private _credentialsService:CredentialsService, private _applicationService:ApplicationService){


  }

ngOnInit(): void {
  this.loggedInUserName = window.sessionStorage.getItem('userName');

}

openApplication(applicationName:string){

  const token = window.sessionStorage.getItem('portal-token');

  if(!token) {
    window.alert('Please Log In Again');
    return;
  }
  

  const tokenGenerationDTO = {
    serviceName:applicationName
  }

    this._applicationService.generateApplicationToken(tokenGenerationDTO, token).subscribe({
      next:(res)=>{
        if(res.code === 'SUC-200'){
          const findItem = this.applicationUrl.find((item) => item.serviceName === applicationName);
          let url;
          if(findItem){
            url = findItem.url;
          }
          window.open(`${url}/${applicationName}/${res.uniqueId}`)
        }
      },error:(err)=>{
        console.log(err);
      }
    });

  
  

}

}
