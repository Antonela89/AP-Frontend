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
persona: Persona = new Persona ("","","","","");
  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
    }
  
    public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (response: Persona) => {this.persona = response;
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);}
      })
    }
}
