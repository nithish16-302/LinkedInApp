import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlconfService} from '../urlconf.service';
import {Router, RouterModule} from '@angular/router';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {
  registerForm: FormGroup;
  isRegistered: boolean;
  constructor(private http: HttpClient,
              private  urlConf: UrlconfService,
              private  route: Router,
              private registerService: RegisterService) {
    this.isRegistered = false;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'phoneNo': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.registerService.registerUser(this.registerForm.value);

  }
}
