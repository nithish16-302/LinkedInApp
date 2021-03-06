import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AboutService} from '../about.service';


@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit {
  AboutForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private abtService: AboutService,
              private fb: FormBuilder){}
  ngOnInit() {
    this.AboutForm = this.fb.group({
      'about': [null, Validators.required],
      'designation': [null, Validators.required],
      'address': [ null, Validators.required ],
      'userId': [null]
    });
  }
  onSubmit() {
    // console.log(sessionStorage.getItem('userId'));
    this.AboutForm.controls.userId.setValue(localStorage.getItem('userId'));
    console.log(this.AboutForm.value);
    this.abtService.submitForm(this.AboutForm).subscribe(
      responseData => {
        this.abtService.aboutData.about = responseData['about'];
        this.abtService.aboutData.address = responseData['address'];
        this.abtService.aboutData.designation = responseData['designation'];
        this.abtService.aboutData.userId = responseData['userId'];
      },
      error => {
        console.log('ERROR');
      }
    );
    this.activeModal.close();
  }

}
