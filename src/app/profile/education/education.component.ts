import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EducationModalComponent} from "./education-modal/education-modal.component";
import {EducationService} from "./education.service";
import {Education} from "./education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../profile.component.css']
})
export class EducationComponent implements OnInit {

  constructor( private modalService: NgbModal, private eduService: EducationService) { }

  ngOnInit() {
    this.getEduDetails();
  }
  getEduDetails() {
    this.eduService.getEdu().subscribe(
      responseData => {
        for (const key in responseData){
          this.eduService.response.push(responseData[key]);
        }
      }
    );
  }
  open() {
    const modalRef = this.modalService.open(EducationModalComponent);
  }
  EduUpdate(key: Education){
    const modalRef = this.modalService.open(EducationModalComponent);
    modalRef.componentInstance.patchValue = true;
    modalRef.componentInstance.educationPatchValues = key;
  }
  deleteEdu(key: Education){
    this.eduService.deleteEducation(key.id).subscribe(
      response => {
        this.eduService.response.splice(this.eduService.response.indexOf(key),1);
        alert('Education Deleted..!');
      },
      error => {
        alert('Unable to delete');
      }
    );
  }
}
