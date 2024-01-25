import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string,password:string){
    //since there is no backend
    // we will store here the token
    localStorage.setItem("token",Math.random()+"");
  }
  
  logout(){
    localStorage.removeItem("token");
  }

  get isLoggedIn(){
    if(localStorage.getItem("token")){
      environment.loggedin=true;
      return true;
    }
    return false;
  }


}
