import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CicloInterfaz } from 'src/app/utils/CicloInterfaz';
import { ServicioCiclosService } from 'src/app/services/servicio-ciclos.service'
import { ServicioAsignaturasService } from 'src/app/services/servicio-asignaturas.service'
import { AsignaturaInterfaz } from 'src/app/utils/AsignaturasInterfaz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  constructor(private servicioCiclo: ServicioCiclosService, private servicioAsignatura: ServicioAsignaturasService, private gestorRutas: Router) { }

  arrayCiclo: CicloInterfaz[] = [];
  arrayAsignaturas: AsignaturaInterfaz[] = [];
  arrayCicloDam: string[] = [];

  cicloDetalle: CicloInterfaz = {
    nombre: '',
    curso: 0,
    asignaturas: [],
    imagen: '',
  };

  arrayCicloDaw: string[] = [];
  numero: number = 0;


  ngOnInit(): void {
    this.arrayCiclo = this.servicioCiclo.getAllCiclos();
    this.arrayAsignaturas = this.servicioAsignatura.getAllAsignatura();
    this.filtrarCiclos();
    // this.gestorRutas.navigate(['Detalle-Ciclo',])

  }

  filtrarCiclos() {
    //this.numero = this.arrayAsignaturas.length;
    this.arrayAsignaturas.forEach(asignatura => {
      if (asignatura.ciclo.includes("DAM") && asignatura.ciclo.includes("DAW")) {
        this.arrayCicloDam.push(asignatura.nombre);
        this.arrayCicloDaw.push(asignatura.nombre);
      } else if (asignatura.ciclo.includes("DAW")) {
        this.arrayCicloDaw.push(asignatura.nombre);
      } else if (asignatura.ciclo.includes("DAM")) {
        this.arrayCicloDam.push(asignatura.nombre);
      }
    });
  }

  verDetalleDam(curso: number, titulo: string) {
    this.gestorRutas.navigate(['Detalle-Ciclo',titulo,curso]);
  }

  verDetalleDaw(curso: number, titulo: string) {
    this.gestorRutas.navigate(['Detalle-Ciclo',titulo,curso]);
  }



}
