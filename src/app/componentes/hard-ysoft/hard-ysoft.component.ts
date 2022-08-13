import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-hard-ysoft',
  templateUrl: './hard-ysoft.component.html',
  styleUrls: ['./hard-ysoft.component.css']
})
export class HardYSoftComponent implements OnInit {
  public listaSkills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills() {
    this.skillsService.getSkills().subscribe({
      next: (response:Skills[]) => {this.listaSkills = response;},
    error: (error: HttpErrorResponse) => {alert(error.message);
    }})
  }
}
