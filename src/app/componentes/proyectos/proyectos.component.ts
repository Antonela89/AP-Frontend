import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public listaProyectos: Proyecto[] = [];
  public modificarProyecto: Proyecto | undefined;
  public borrarProyecto: Proyecto | undefined;
  public formToSend: any = {};


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(){
    this.proyectoService.getProyecto().subscribe({
      next: (response: Proyecto[]) => {this.listaProyectos = response;
      }, error: (error: HttpErrorResponse) => {alert(error.message);
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

  openModal(mode:String, Proyecto?: Proyecto, ): void{
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display ='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'agregar') {
      button.setAttribute('data-target', '#agregarProyectoModal');
    } else if (mode === 'eliminar') {
      this.borrarProyecto = Proyecto;
      button.setAttribute('data-target', '#eliminarProyectoModal');
    } else if (mode === 'editar') {
      this.modificarProyecto = Proyecto;
      button.setAttribute('data-target', '#editarProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public handleAdd(){
    this.proyectoService.createProyecto(this.formToSend).subscribe({
      next:(response: Proyecto)=>{
          console.log(response);
          alert("¡Enviado correctamente!");
          this.getProyectos();
        },
      error: (error: HttpErrorResponse)=>{
        alert(error.message); 
      }}) 
  }

  public editarProyecto(id: number){
    this.proyectoService.updateProyecto(this.formToSend, id).subscribe({
      next:(response: Proyecto) => {
        console.log(response); 
        this.getProyectos();
      },
      error: (error: HttpErrorResponse)=>{
        alert(error.message);
      }})
  }

  public eliminarProyecto(id: number):void{
    this.proyectoService.deleteProyecto(id).subscribe({
      next:(response: void) => {console.log(response), this.getProyectos();
    },error: (error: HttpErrorResponse)=>{alert(error.message);
  }}) 
  }
}
