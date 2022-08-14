export class Educacion {
    idEdu: number;
	institucion: string;
	titulo: string;
	anoInicio: number;
	anoFin: number;

    constructor(idEdu: number, institucion: string, titulo: string, anoInicio: number, anoFin: number) {
        this.idEdu = idEdu;
        this.institucion = institucion ;
        this.titulo = titulo;
        this.anoInicio = anoInicio;
        this.anoFin =  anoFin
    }
}
