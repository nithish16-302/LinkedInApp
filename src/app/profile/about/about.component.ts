import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AboutModalComponent} from './about-modal/about-modal.component';
import {AboutService} from "./about.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../profile.component.css']
})
export class AboutComponent implements OnInit {
  userName: string;
  constructor( private loginService: LoginService, private modalService: NgbModal, private aboutService: AboutService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('name');
    this.aboutService.getProfile().subscribe( response => {
          console.log(response);
          console.log('response received');
          this.aboutService.aboutData.about = response['about'];
          this.aboutService.aboutData.address = response['address'];
          this.aboutService.aboutData.designation = response['designation'];
          this.aboutService.aboutData.userId = response['userId'];
          console.log(this.aboutService.aboutData);
      },
      error => {
            console.log(error);
      }    );
  }
  open() {
    const modalRef = this.modalService.open(AboutModalComponent);
  }
}
