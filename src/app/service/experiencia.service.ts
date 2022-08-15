import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private ApiExperiencia = `${environment.Api}/experiencia/`;

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.ApiExperiencia}ver`);
  }

  public createExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.ApiExperiencia}nuevo`, experiencia);
  }

  public deleteExperiencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ApiExperiencia}borrar/${id}`);
  }

  public updateExperiencia(experiencia: Experiencia, id: number): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.ApiExperiencia}editar/${id}?empresa=${experiencia.empresa}&anoInicio=${experiencia.anoInicio}&anoFin=${experiencia.anoFin}&descripcion=${experiencia.descripcion}`, experiencia);
  }
}
