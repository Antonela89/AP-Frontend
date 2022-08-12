import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  ApiServerUrl = environment.Api;

  constructor(private http: HttpClient){ }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.ApiServerUrl}/persona/ver`);
  }

  public createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.ApiServerUrl}/persona/nuevo`, persona);
  }

  public deletePersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.ApiServerUrl}/persona/borrar/${id}`);
  }

  public updatePersona(persona: Persona, id: number): Observable<Persona> {
    return this.http.put<Persona>(`${this.ApiServerUrl}/persona/editar/${id}`, persona);
  }
}
