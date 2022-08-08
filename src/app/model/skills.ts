export class Skills {
    idSkill?: number;
	nombreSkill: string;
	fotoSkill: string;
	porcentaje: number;

    constructor(nombreSkill: string, fotoSkill: string, porcentaje: number){
    this.nombreSkill = nombreSkill;
	this.fotoSkill = fotoSkill;
	this.porcentaje = porcentaje;
    }
}