import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UrlconfService} from '../../urlconf.service';
import {Observable} from 'rxjs';
import {Experience} from "./experience";

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  response: Experience[] = [];
  constructor( private http: HttpClient, private url: UrlconfService, ) { }
  submitForm( expForm: FormGroup) {
    return this.http.put(this.url.url + 'experience/update', expForm.value);
  }
  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url.url + 'experience/get/' + localStorage.getItem('userId'));
  }
  deleteExp(id: string){
    return  this.http.delete(this.url.url + 'experience/delete/'+ id);
  }
}
