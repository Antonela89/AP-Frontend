import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public listaExperiencia: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias() {
    this.experienciaService.getExperiencia().subscribe({
      next: (response: Experiencia[]) => {this.listaExperiencia = response;
      }, error: (error: HttpErrorResponse) => {alert(error.message);
      }})
  }
}
