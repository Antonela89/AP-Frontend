export class Proyecto {
    idProy: number;
	nombreProyecto: string;
	descripcion: string;
	urlProy: string;
	fotoProyeto: string;

    constructor(idProy: number, nombreProyecto: string, descripcion: string, urlProy: string, fotoProyeto: string){
    this.idProy = idProy;
	this.nombreProyecto = nombreProyecto;
	this.descripcion = descripcion;
	this.urlProy = urlProy;
	this.fotoProyeto = fotoProyeto;
    }

}