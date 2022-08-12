import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  ApiServerUrl = environment.Api;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.ApiServerUrl}/skills/ver`);
  }

  public createSkills(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.ApiServerUrl}/skills/nuevo`, skills);
  }

  public deleteSkills(id: number): Observable<Skills> {
    return this.http.delete<Skills>(`${this.ApiServerUrl}/skills/borrar/${id}`);
  }

  public updateSkills(skills: Skills, id: number): Observable<Skills> {
    return this.http.put<Skills>(`${this.ApiServerUrl}/skills/editar/${id}`, skills);
  }
}
