import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  ApiServerUrl = environment.Api;

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.ApiServerUrl}/proyecto/ver`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.ApiServerUrl}/proyecto/nuevo`, proyecto);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.ApiServerUrl}/proyecto/borrar/${id}`);
  }

  public updateProyecto(proyecto: Proyecto, id: number): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.ApiServerUrl}/proyecto/editar/${id}`, proyecto);
  }
}
