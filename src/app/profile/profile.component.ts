import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private loginService: LoginService ) { }

  ngOnInit() {
  }
  onLogOut() {
    this.loginService.logout();
  }
}
