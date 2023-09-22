import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/services/credential/credentials.service';
import { LoginServicesService } from 'src/services/login-services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!:string;
  userPassword!:string;
  isUserName:boolean = false;
  isUserPassword:boolean = false


  constructor(private _loginService:LoginServicesService, private credentialsService:CredentialsService, private _router:Router){

  }
  checkUserName(event:any){
    this.userName = event
    this.isUserName = false;
  }

  checkUserPassword(event:any){
    this.userPassword = event;
    this.isUserPassword = false;
  }

  async login(){
    if(!this.userName) {
      this.isUserName = true;
      return;
    }
  
    if(!this.userPassword) {
      this.isUserPassword = true;
      return;
    }

    const addLoginDTO = {
      userName:this.userName,
      password:this.userPassword
    }

    try{
     const res = await this._loginService.loginPortalUser(addLoginDTO);
     if(res.code === 'SUC-200'){
      window.sessionStorage.setItem('portal-token', res.token);
      window.sessionStorage.setItem('userName', res.data.userName);
      
      this._router.navigate(['/dashboard']);
     }
    }catch(err:any){
      if(err instanceof HttpErrorResponse) {
        if(err.error.code === 'NOT-404'){
          window.alert('User Not Found');
        }
        else if(err.error.code === 'NOT-400'){
          window.alert('Wrong Password')
        }
      }
    }
   
  }
}
