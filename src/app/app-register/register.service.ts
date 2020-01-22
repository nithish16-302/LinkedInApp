import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlconfService} from '../urlconf.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private  urlConf: UrlconfService, private  route: Router) { }

  registerUser(postData: {first_name: string, last_name: string, email: string, password: string, phoneno: string}) {
    this.http.post( this.urlConf.url + 'register', postData).subscribe(
      responseData => {
        console.log(responseData);
        // console.log('success');
        alert('Registered Successfully');
        this.route.navigate(['/login']).then();
      },
      error => {
        console.log('Given data is incorrect or empty.!');
      }
    );
  }
}
