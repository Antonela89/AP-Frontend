import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  public persona: Persona | undefined;
  public modificarPersona: Persona | undefined;
  public borrarPersona: Persona | undefined;
  public formToSend: any = {};
  isLogged = environment.isLogged;

  constructor(private tokenService: TokenService, private personaService: PersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPersonas();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(data => {
      this.persona = data[data.length - 1];
    }, err => {
      alert(err);
    })  
  }

  personaVacio(persona  = {}) {
    return Object.keys(persona).length === 0;
  }
  

  handleChange(e: Event): void {
    const inputValue = ((<HTMLInputElement>e.target).value);
    const inputName = ((<HTMLInputElement>e.target).name);

    this.formToSend = {
      ...this.formToSend,
      [inputName]: inputValue
    }

    console.log(this.formToSend)
  }

  openModal(mode: String, Persona?: Persona,): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'agregar') {
      button.setAttribute('data-target', '#agregarPersonaModal');
    } else if (mode === 'eliminar') {
      this.borrarPersona = Persona;
      button.setAttribute('data-target', '#eliminarPersonaModal');
    } else if (mode === 'editar') {
      this.modificarPersona = Persona;
      button.setAttribute('data-target', '#editarPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public handleAdd() {
    this.personaService.createPersona(this.formToSend).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersonas();
        this.router.navigate(['']);
        alert("¡Enviado correctamente!");
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['']);
      }
    })
  }

  public editarPersona(id: number) {
    const formData = new FormData;

    formData.append('nombre', this.formToSend.nombre);
    formData.append('apellido', this.formToSend.apellido);
    formData.append('titulo', this.formToSend.titulo);
    formData.append('acercaMi', this.formToSend.acercaMi);
    formData.append('urlFoto', this.formToSend.urlFoto);

    this.personaService.updatePersona(formData, id).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersonas();
        this.router.navigate(['']);
        alert("¡Modificado correctamente!");
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['']);
      }
    })
  }

  public eliminarPersona(id: number): void {
    this.personaService.deletePersona(id).subscribe({
      next: (response: void) => {
        console.log(response), 
        this.getPersonas();
        this.router.navigate(['']);
        alert("¡Eliminado correctamente!");
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['']);
      }
    })
  }
}
