export class Experiencia {
    idExp: number;
	empresa: string;
	anoInicio: string;
	anoFin: number;
	descripcion: string;

    constructor(idExp: number, empresa: string, anoInicio: string, anoFin: number, descripcion: string) {
	this.idExp = idExp;
	this.empresa = empresa;
	this.anoInicio = anoInicio;
	this.anoFin = anoFin;
	this.descripcion = descripcion;
    }
}
