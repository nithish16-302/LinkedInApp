import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UrlconfService} from '../../urlconf.service';
import {Education} from "./education";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  response: Education[] = [];
  constructor( private http: HttpClient, private  url: UrlconfService) {
  }
  submitForm( eduForm: FormGroup) {
    return this.http.put(this.url.url + 'education/update', eduForm.value);
  }
  getEdu(): Observable<Education[]> {
    return this.http.get<Education[]>( this.url.url + 'education/get/' + sessionStorage.getItem('userId'));
  }
  deleteEducation(id: string){
    return this.http.delete(this.url.url + 'education/delete/' + id);
  }
}
