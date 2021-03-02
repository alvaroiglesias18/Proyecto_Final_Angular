import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { CicloInterfaz } from '../utils/CicloInterfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioCiclosService {

  ciclosArray: CicloInterfaz[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ];

  cicloRecuperado: CicloInterfaz[] = [];

  ciclosFiltrados: CicloInterfaz[] = [];

  getAllCiclos(): CicloInterfaz[] {
    return this.ciclosArray;
  }



  constructor() { }

}
