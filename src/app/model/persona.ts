export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    acercaMi: string;
    urlFoto: string;
    likedinUrl: string;
    githubUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    imgBanner: string;

    constructor(id: number, nombre: string, apellido:string, titulo: string, acercaMi: string, urlFoto: string,likedinUrl: string, githubUrl: string, facebookUrl: string, instagramUrl: string, imgBanner: string){
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.titulo = titulo,
        this.acercaMi = acercaMi,
        this.urlFoto = urlFoto
        this.likedinUrl= likedinUrl,
        this.githubUrl = githubUrl,
        this.facebookUrl = facebookUrl,
        this.instagramUrl = instagramUrl,
        this.imgBanner = imgBanner
    }
}