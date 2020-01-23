import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlconfService} from '../../../urlconf.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExpService} from "../exp.service";
import {Experience} from "../experience";

@Component({
  selector: 'app-exp-component',
  templateUrl: './exp-component.component.html',
  styleUrls: ['./exp-component.component.css']
})
export class ExpComponentComponent implements OnInit {
  ExpFrom: FormGroup;
  expUpdateValues: Experience;
  patchValue: false;
  constructor( private url: UrlconfService,
               private activeModal: NgbActiveModal,
               private expService: ExpService,
               private fb: FormBuilder) { }

  ngOnInit() {
    this.ExpFrom = this.fb.group({
      title: [null, Validators.required],
      companyName: [null, Validators.required],
      location: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      description: [null, Validators.required],
      userId: [null],
      id: [null]
    });
    if(this.patchValue){
      this.ExpFrom.patchValue({
        'title': this.expUpdateValues.title,
        'companyName': this.expUpdateValues.companyName,
        'location': this.expUpdateValues.location,
        'startDate': this.expUpdateValues.startDate,
        'endDate': this.expUpdateValues.endDate,
        'description': this.expUpdateValues.description,
        'userId': this.expUpdateValues.userId,
        'id': this.expUpdateValues.id
      }
      );
    }
  }
  onSubmit() {
      this.ExpFrom.controls.userId.setValue(localStorage.getItem('userId'));
      console.log(this.ExpFrom.value);
      this.expService.submitForm(this.ExpFrom).subscribe(
        responseData => {
          if(!this.patchValue){
            console.log(responseData);
            this.expService.response.push(this.ExpFrom.value);
          }else{
            this.expService.response.splice(0,this.expService.response.length);
            for ( const key in responseData) {
              this.expService.response.push(responseData[key]);
            }
          }
        },
        err => {
          alert('error in form');
        }
      );
    this.activeModal.close();
    }


}
