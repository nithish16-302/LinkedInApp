import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userId');
    console.log(token);
    if (token !== null){
      return true;
    }else{
      return false;
    }
  }
}
