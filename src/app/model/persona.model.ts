export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    acercaMi: string;
    urlFoto: string;

    constructor(nombre: string, apellido:string, titulo: string, acercaMi: string, urlFoto: string){
        this.nombre = nombre,
        this.apellido = apellido,
        this.titulo = titulo,
        this.acercaMi = acercaMi,
        this.urlFoto = urlFoto
    }
}