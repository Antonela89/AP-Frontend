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
  public modificarSkills: Skills | undefined;
  public borrarSkills: Skills | undefined;
  public formToSend: any = {};

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

  handleChange(e: Event): void{
    const inputValue = ((<HTMLInputElement>e.target).value);
    const inputName = ((<HTMLInputElement>e.target).name);

    this.formToSend = {
      ...this.formToSend,
      [inputName]: inputValue
    }

    console.log(this.formToSend)
  }

  openModal(mode:String, educacion?: Skills, ): void{
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display ='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'agregar') {
      button.setAttribute('data-target', '#agregarEducacionModal');
    } else if (mode === 'eliminar') {
      this.borrarSkills = educacion;
      button.setAttribute('data-target', '#eliminarEducacionModal');
    } else if (mode === 'editar') {
      this.modificarSkills = educacion;
      button.setAttribute('data-target', '#editarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public handleAdd(){
    this.skillsService.createSkills(this.formToSend).subscribe({
      next:(response: Skills)=>{
          console.log(response);
          alert("¡Enviado correctamente!");
          this.getSkills();
        },
      error: (error: HttpErrorResponse)=>{
        alert(error.message); 
      }}) 
  }

  public editarSkills(id: number){
    this.skillsService.updateSkills(this.formToSend, id).subscribe({
      next:(response: Skills) => {
        console.log(response); 
        this.getSkills();
      },
      error: (error: HttpErrorResponse)=>{
        alert(error.message);
      }})
  }

  public eliminarSkills(id: number):void{
    this.skillsService.deleteSkills(id).subscribe({
      next:(response: void) => 
      {console.log(response), 
        this.getSkills();
    },error: (error: HttpErrorResponse)=>
    {alert(error.message);
  }}) 
  }
}
