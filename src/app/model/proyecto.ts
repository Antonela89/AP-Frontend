export class Proyecto {
    idProy?: number;
	nombreProyecto: string;
	descripcion: string;
	url: string;
	fotoProyeto: string;

    constructor(nombreProyecto: string, descripcion: string, url: string, fotoProyeto: string){
    this.nombreProyecto = nombreProyecto;
	this.descripcion = descripcion;
	this.url = url;
	this.fotoProyeto = fotoProyeto;
    }

}