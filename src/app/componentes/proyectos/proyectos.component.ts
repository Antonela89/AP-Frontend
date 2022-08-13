import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public listaProyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(){
    this.proyectoService.getProyecto().subscribe({
      next: (response: Proyecto[]) => {this.listaProyectos = response;
      }, error: (error: HttpErrorResponse) => {alert(error.message);
      }})
  }
}
