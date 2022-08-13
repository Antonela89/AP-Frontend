import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private ApiProyecto = `${environment.Api}/proyecto/`;

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.ApiProyecto}ver`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.ApiProyecto}nuevo`, proyecto);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.ApiProyecto}borrar/${id}`);
  }

  public updateProyecto(proyecto: Proyecto, id: number): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.ApiProyecto}editar/${id}`, proyecto);
  }
}
