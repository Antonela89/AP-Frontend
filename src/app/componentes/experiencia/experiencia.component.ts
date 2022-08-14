import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public listaExperiencia: Experiencia[] = [];
  public modificarExperiencia: Experiencia | undefined;
  public borrarExperiencia: Experiencia | undefined;
  public formToSend: any = {};

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias() {
    this.experienciaService.getExperiencia().subscribe({
      next: (response: Experiencia[]) => 
      {this.listaExperiencia = response;
      }, error: (error: HttpErrorResponse) => 
      {alert(error.message);
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

  openModal(mode:String, educacion?: Experiencia, ): void{
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display ='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'agregar') {
      button.setAttribute('data-target', '#agregarEducacionModal');
    } else if (mode === 'eliminar') {
      this.borrarExperiencia = educacion;
      button.setAttribute('data-target', '#eliminarEducacionModal');
    } else if (mode === 'editar') {
      this.modificarExperiencia = educacion;
      button.setAttribute('data-target', '#editarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public handleAdd(){
    this.experienciaService.createExperiencia(this.formToSend).subscribe({
      next:(response: Experiencia)=>{
          console.log(response);
          alert("¡Enviado correctamente!");
          this.getExperiencias();
        },
      error: (error: HttpErrorResponse)=>{
        alert(error.message); 
      }}) 
  }

  public editarExperiencia(id: number){
    this.experienciaService.updateExperiencia(this.formToSend, id).subscribe({
      next:(response: Experiencia) => {
        console.log(response); 
        this.getExperiencias();
      },
      error: (error: HttpErrorResponse)=>{
        alert(error.message);
      }})
  }

  public eliminarExperiencia(id: number):void{
    this.experienciaService.deleteExperiencia(id).subscribe({
      next:(response: void) => 
      {console.log(response), 
        this.getExperiencias();
    },error: (error: HttpErrorResponse)=>
    {alert(error.message);
  }}) 
  }
}

