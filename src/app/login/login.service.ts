import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UrlconfService} from '../urlconf.service';
import {HttpClient} from '@angular/common/http';
import {EducationService} from "../profile/education/education.service";
import {ExpService} from "../profile/experience/exp.service";
import {SkillService} from "../profile/skills/skill.service";
import {RegisterService} from "../app-register/register.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId: number;
  userData: string;
  loading: boolean;
  loggedIn: boolean;
  constructor(private route: Router,
              private urlConf: UrlconfService,
              private http: HttpClient,
              private eduServ: EducationService,
              private expServ: ExpService,
              private skillServ: SkillService) {
    this.loading = false;
    this.loggedIn = true;
  }

  login(postData: { email: string, password: string }) {
    this.loading = true;
    if (sessionStorage.getItem('userId') === null) {
      this.http.post(this.urlConf.url + 'login', postData).subscribe(
          responseData => {
            console.log(responseData['id']);
            localStorage.setItem('userId', String(responseData['id']));
            localStorage.setItem('name', String(responseData['name']));
            // console.log(sessionStorage.getItem('name'));
            this.route.navigate(['/profile']).then();
          },
          err => {
            console.log(err.status);
            this.loading = false;
            this.loggedIn = false;
            // alert('Email/Password Incorrect.!');
          }
      );
    } else {
        this.route.navigate(['/profile']).then();
        console.log('else');
    }
  }

  logout() {
    localStorage.clear();
    this.loading = false;
    this.eduServ.response.splice(0,this.eduServ.response.length);
    this.expServ.response.splice(0,this.expServ.response.length);
    this.skillServ.skillsArray.splice(0,this.skillServ.skillsArray.length);
    this.route.navigate(['/login']).then();
  }
}
