import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private ApiPersona = `${environment.Api}/persona/`;

  constructor(private http: HttpClient){ }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.ApiPersona}ver`);
  }

  public getPersonaPerfil(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.ApiPersona}ver/perfil/${id}`);
  }

  public createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.ApiPersona}nuevo`, persona);
  }

  public deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiPersona}borrar/${id}`);
  }

  public updatePersona(persona: FormData, id: number): Observable<Persona> {
    return this.http.put<Persona>(`${this.ApiPersona}editar/${id}`, persona);
  }
}
