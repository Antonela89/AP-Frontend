export class Proyecto {
    idProy: number;
	nombreProyecto: string;
	descripcion: string;
	url: string;
	fotoProyecto: string;

    constructor(idProy: number, nombreProyecto: string, descripcion: string, url: string, fotoProyecto: string){
    this.idProy = idProy;
	this.nombreProyecto = nombreProyecto;
	this.descripcion = descripcion;
	this.url = url;
	this.fotoProyecto = fotoProyecto;
    }

}