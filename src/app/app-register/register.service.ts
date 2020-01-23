import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlconfService} from '../urlconf.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  isRegistered:boolean;
  constructor(private http: HttpClient, private  urlConf: UrlconfService, private  route: Router) {
    this.isRegistered = false;
  }

  registerUser(postData: {firstName: string, lastName: string, email: string, password: string, phoneNo: string}) {
    this.http.post( this.urlConf.url + 'register', postData).subscribe(
      responseData => {
        console.log(responseData);
        // console.log('success');
        // alert('Registered Successfully');
        this.isRegistered = true;
        this.route.navigate(['/login']).then();
      },
      error => {
        console.log('Given data is incorrect or empty.!');
      }
    );
  }
}
