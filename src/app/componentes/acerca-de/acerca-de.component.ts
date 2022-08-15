import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private tokenService: TokenService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
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
        alert("¡Enviado correctamente!");
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public editarPersona(id: number) {
    this.personaService.updatePersona(this.formToSend, id).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarPersona(id: number): void {
    this.personaService.deletePersona(id).subscribe({
      next: (response: void) => {
        console.log(response), this.getPersona();
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
