import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SkillsModalComponent} from "./skills-modal/skills-modal.component";
import {SkillService} from "./skill.service";
import {Skills} from "./skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../profile.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private modalService: NgbModal, private skillsServ: SkillService) {  }

  ngOnInit() {
    this.getSkills();
  }
  getSkills(){
    this.skillsServ.getSkillsArray().subscribe(
      responseData => {
        console.log(responseData);
        this.skillsServ.skillsArray.splice(0,this.skillsServ.skillsArray.length);
        for (const key in responseData){
          this.skillsServ.skillsArray.push(responseData[key]);
        }
      }
    );
  }
  open() {
    const modalRef = this.modalService.open(SkillsModalComponent);
  }
  onDelete(skill: Skills){
    this.skillsServ.deleteSkill(skill.id).subscribe(
      responseData => {
        this.skillsServ.skillsArray.splice(this.skillsServ.skillsArray.indexOf(skill),1);
        alert(skill.skillName + ' deleted successfully');
      },
      error => {
        alert('error in deleting skill');
      }

    );
  }

}
