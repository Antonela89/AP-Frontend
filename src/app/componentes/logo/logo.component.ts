import { Component, OnInit } from '@angular/core';
import {TokenService} from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  animations: []
})
export class LogoComponent implements OnInit {
  public persona: Persona | undefined;
  isLogged = environment.isLogged;

  constructor(private tokenService: TokenService, private personaService: PersonaService) { }

  
  ngOnInit(): void {
    this.getPersonas();
    if(this.tokenService.getToken()){
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
  

  onLogOut(e: Event): void {
    e.defaultPrevented;
    this.tokenService.logOut();
    window.location.reload();
  }
}
