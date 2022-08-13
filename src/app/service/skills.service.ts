import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private ApiSkills = `${environment.Api}/skills/`;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.ApiSkills}ver`);
  }

  public createSkills(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.ApiSkills}nuevo`, skills);
  }

  public deleteSkills(id: number): Observable<Skills> {
    return this.http.delete<Skills>(`${this.ApiSkills}borrar/${id}`);
  }

  public updateSkills(skills: Skills, id: number): Observable<Skills> {
    return this.http.put<Skills>(`${this.ApiSkills}editar/${id}`, skills);
  }
}
