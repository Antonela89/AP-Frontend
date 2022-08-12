import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
ApiServerUrl = environment.Api;

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.ApiServerUrl}/experiencia/ver`);
  }

  public createExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.ApiServerUrl}/experiencia/nuevo`, experiencia);
  }

  public deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(`${this.ApiServerUrl}/experiencia/borrar/${id}`);
  }

  public updateExperiencia(experiencia: Experiencia, id: number): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.ApiServerUrl}/experiencia/editar/${id}`, experiencia);
  }
}
