import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UrlconfService} from '../urlconf.service';
import {LoginService} from './login.service';
import {RegisterService} from "../app-register/register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  serverErrorMessages: string;

  /*formErrors = {
    'email',
    'password':
  }*/
  constructor(private http: HttpClient,
              private urlConf: UrlconfService,
              private route: Router,
              private loginService: LoginService,
              private regServ: RegisterService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
      if(localStorage.getItem('userId') === null){
        this.createLoginForm();
      }else{
        this.route.navigate(['/profile']).then();
      }
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required]
    });
  }
  onSubmit() {
      this.loginService.login(this.loginForm.value);
  }

}
