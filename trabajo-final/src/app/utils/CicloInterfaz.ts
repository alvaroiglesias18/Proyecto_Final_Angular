export interface CicloInterfaz {


    nombre: string;
    curso: number;
    asignaturas: Conocimientos[];
    imagen: string;


}

interface Conocimientos {
    nombre: string;
    imagen: string;
}