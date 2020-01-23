import { Injectable } from '@angular/core';
import {UrlconfService} from '../../urlconf.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {About} from './about';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutData: About = new class implements About {
    about: "";
    address: "";
    designation: "";
    userId: "";
  };
  constructor(private url: UrlconfService, private http: HttpClient) {  }

  submitForm(abtForm: FormGroup): Observable<About> {
    return this.http.put<About>(this.url.url + 'profile/update', abtForm.value);
  }
  getProfile(): Observable<About>{
    return this.http.get<About>(this.url.url + 'profile/get/' + sessionStorage.getItem('userId'));
  }
}
