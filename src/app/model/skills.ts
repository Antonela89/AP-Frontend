export class Skills {
    idSkill: number;
	nombreSkill: string;
	fotoSkill: string;
	porcentaje: number;

    constructor(idSkill: number, nombreSkill: string, fotoSkill: string, porcentaje: number){
	this.idSkill = idSkill;
    this.nombreSkill = nombreSkill;
	this.fotoSkill = fotoSkill;
	this.porcentaje = porcentaje;
    }
}