import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  public listaEducacion: Educacion[] = [];
  public modificarEducacion: Educacion | undefined;
  public borrarEducacion: Educacion | undefined;
  public formToSend: any = {};
  isLogged = environment.isLogged;

  constructor(private tokenService: TokenService, private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getEducaciones(){
    this.educacionService.getEducacion().subscribe({
      next:(response: Educacion[]) => {
        this.listaEducacion = response;
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
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

  openModal(mode:String, educacion?: Educacion, ): void{
    const container = document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display ='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'agregar') {
      button.setAttribute('data-target', '#agregarEducacionModal');
    } else if (mode === 'eliminar') {
      this.borrarEducacion = educacion;
      button.setAttribute('data-target', '#eliminarEducacionModal');
    } else if (mode === 'editar') {
      this.modificarEducacion = educacion;
      button.setAttribute('data-target', '#editarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public handleAdd(){
    this.educacionService.createEducacion(this.formToSend).subscribe({
      next:(response: Educacion)=>{
          console.log(response);
          alert("¡Enviado correctamente!");
          this.getEducaciones();
        },
      error: (error: HttpErrorResponse)=>{
        alert(error.message); 
      }}) 
  }

  public editarEducacion(id: number){
    this.educacionService.updateEducacion(this.formToSend, id).subscribe({
      next:(response: Educacion) => {
        console.log(response); 
        this.getEducaciones();
      },
      error: (error: HttpErrorResponse)=>{
        alert(error.message);
      }})
  }

  public eliminarEducacion(id: number):void{
    this.educacionService.deleteEducacion(id).subscribe({
      next:(response: void) => {console.log(response), this.getEducaciones();
    },error: (error: HttpErrorResponse)=>{alert(error.message);
  }}) 
  }
}
