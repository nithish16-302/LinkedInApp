import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExpComponentComponent} from './exp-component/exp-component.component';
import {ExpService} from "./exp.service";
import {Experience} from "./experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../profile.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor( private modalService: NgbModal, private expService: ExpService) { }
  ngOnInit() {
    this.getExpData();
  }
  getExpData(){
    this.expService.getExp().subscribe(
      responseData => {
        console.log(responseData);
        for ( const key in responseData) {
          this.expService.response.push(responseData[key]);
        }
      }
    );
  }
  open() {
    const modalRef = this.modalService.open(ExpComponentComponent);
  }
  ExpUpdate(key: Experience){
    const modalRef = this.modalService.open(ExpComponentComponent);
    modalRef.componentInstance.expUpdateValues = key;
    modalRef.componentInstance.patchValue = true;
  }
  onDelete(key: Experience){
    this.expService.deleteExp(key.id).subscribe(
      responseData => {
        const index = this.expService.response.indexOf(key);
        this.expService.response.splice(index,1);
        console.log(responseData);
        alert("successfully deleted..!");
      },
      error => {
        alert('Error in deleting');
      }
    );
  }
}
