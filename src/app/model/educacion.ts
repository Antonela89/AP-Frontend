export class Educacion {
    idEdu?: number;
	institucion: string;
	titulo: string;
	anoInicio: number;
	anoFin: number;

    constructor(institucion: string, titulo: string, anoInicio: number, anoFin: number) {
        this.institucion = institucion ;
        this.titulo = titulo;
        this.anoInicio = anoInicio;
        this.anoFin =  anoFin
    }
}
