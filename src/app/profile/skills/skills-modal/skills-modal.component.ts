import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkillService} from "../skill.service";

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent implements OnInit {
  skillsForm: FormGroup;
  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private skillsServ: SkillService) { }


  ngOnInit() {
    this.skillsForm = this.fb.group({
        'skillName': [null, Validators.required],
        'userId': [null]
    });

  }
  onSubmit(){
      this.skillsForm.controls.userId.setValue(localStorage.getItem('userId'));
      this.skillsServ.addSkill(this.skillsForm).subscribe(
        responseData => {
          console.log(responseData);
          this.skillsServ.skillsArray.splice(0,this.skillsServ.skillsArray.length);
          for (const key in responseData){
            this.skillsServ.skillsArray.push(responseData[key]);
          }
        },
        error => {

        }
      );
      this.activeModal.close();
  }
  getSkills(){

  }
}
