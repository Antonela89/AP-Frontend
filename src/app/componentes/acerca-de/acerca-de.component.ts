import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;
  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
    }
  
    public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (data: Persona) => {this.persona = data;
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);}
      })
    }
}
