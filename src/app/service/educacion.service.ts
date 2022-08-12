import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  ApiServerUrl = environment.Api;

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.ApiServerUrl}/educacion/ver`);
  }

  public createEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.ApiServerUrl}/educacion/nuevo`, educacion);
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.ApiServerUrl}/educacion/borrar/${id}`);
  }

  public updateEducacion(educacion: Educacion, id: number): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.ApiServerUrl}/educacion/editar/${id}`, educacion);
  }
}
