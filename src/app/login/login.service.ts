import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UrlconfService} from '../urlconf.service';
import {HttpClient} from '@angular/common/http';
import {EducationService} from "../profile/education/education.service";
import {ExpService} from "../profile/experience/exp.service";
import {SkillService} from "../profile/skills/skill.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId: number;
  userData: string;
  constructor(private route: Router,
              private urlConf: UrlconfService,
              private http: HttpClient,
              private eduServ: EducationService,
              private expServ: ExpService,
              private skillServ: SkillService) {
  }

  login(postData: { email: string, password: string }) {
    if (sessionStorage.getItem('userId') === null) {
      this.http.post(this.urlConf.url + 'login', postData).subscribe(
          responseData => {
            console.log(responseData['id']);
            sessionStorage.setItem('userId', String(responseData['id']));
            sessionStorage.setItem('name', String(responseData['name']));
            console.log(sessionStorage.getItem('name'));
            this.route.navigate(['/profile']).then();
          },
          err => {
            console.log(err.status);
            alert('Email/Password Incorrect.!');
          }
      );
    } else {
        this.route.navigate(['/profile']).then();
        console.log('else');
    }
  }

  logout() {
    sessionStorage.clear();
    this.eduServ.response.splice(0,this.eduServ.response.length);
    this.expServ.response.splice(0,this.expServ.response.length);
    this.skillServ.skillsArray.splice(0,this.skillServ.skillsArray.length);
    this.route.navigate(['/login']).then();
  }
}
