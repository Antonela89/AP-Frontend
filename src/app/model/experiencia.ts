export class Experiencia {
    idExp?: number;
	empresa: string;
	anoInicio: string;
	anoFin: number;
	descripcion: string;

    constructor(empresa: string, anoInicio: string, anoFin: number, descripcion: string) {
    this.empresa = empresa;
	this.anoInicio = anoInicio;
	this.anoFin = anoFin;
	this.descripcion = descripcion;
    }
}
