import { Injectable } from '@angular/core';
import {UrlconfService} from "../../urlconf.service";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Skills} from "./skills";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillsArray: Skills[] = [];
  constructor( private url: UrlconfService, private http: HttpClient) {
  }
  addSkill(skillsForm: FormGroup){
    return this.http.put(this.url.url + 'skills/update', skillsForm.value);
  }
  getSkillsArray(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.url.url + 'skills/get/' + sessionStorage.getItem('userId'));
  }
  deleteSkill(id: string){
    return this.http.delete(this.url.url + 'skills/delete/' + id);
  }
}
