import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UrlconfService} from '../../../urlconf.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EducationService} from '../education.service';
import {Education} from "../education";

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent implements OnInit {
  EducationForm: FormGroup;
  patchValue: false;
  educationPatchValues: Education;
  constructor(public activeModal: NgbActiveModal,
              private eduService: EducationService,
              private url: UrlconfService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.EducationForm = this.fb.group({
      'organisation': [null, Validators.required],
      'startDate': [null, Validators.required],
      'endDate': [null, Validators.required],
      'degree': [null, Validators.required],
      'fieldOfStudy': [null, Validators.required],
      'userId': [null],
      'id': [null]
    });
    if(this.patchValue){
      this.EducationForm.patchValue({
        'organisation': this.educationPatchValues.organisation,
        'startDate': this.educationPatchValues.startDate,
        'endDate': this.educationPatchValues.endDate,
        'degree': this.educationPatchValues.degree,
        'fieldOfStudy': this.educationPatchValues.fieldOfStudy,
        'userId': this.educationPatchValues.userId,
        'id': this.educationPatchValues.id
      });
    }
  }
  onSubmit() {
    this.EducationForm.controls.userId.setValue(sessionStorage.getItem('userId'));
    console.log(this.EducationForm.value);
    this.eduService.submitForm(this.EducationForm).subscribe(
      responseData => {
            this.eduService.response.splice(0,this.eduService.response.length);
            for (const key in responseData){
              this.eduService.response.push(responseData[key]);
            }
      },
      err => {
        alert('error in form');
      }
    );
    this.activeModal.close();
  }


}
