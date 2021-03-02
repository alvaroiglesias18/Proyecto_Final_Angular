import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioAsignaturasService } from 'src/app/services/servicio-asignaturas.service';
import { ServicioCiclosService } from 'src/app/services/servicio-ciclos.service';
import { AsignaturaInterfaz } from 'src/app/utils/AsignaturasInterfaz';
import { CicloInterfaz } from 'src/app/utils/CicloInterfaz';

@Component({
  selector: 'app-detalle-ciclo',
  templateUrl: './detalle-ciclo.component.html',
  styleUrls: ['./detalle-ciclo.component.css']
})
export class DetalleCicloComponent implements OnInit {

  conocimientosNecesarios: string[] = [];
  cicloArray: CicloInterfaz[] = [];
  cicloDetalle: CicloInterfaz = {
    nombre: '',
    curso: 0,
    asignaturas: [],
    imagen: '',
  };
  asiganturasArray: AsignaturaInterfaz[] = [];
  asiganturasArrayFiltradas: AsignaturaInterfaz[] = [];
  nombreCiclo: string = "";
  cursoCiclo: number = 0;




  constructor(private servicioCiclo: ServicioCiclosService, private servicioAsignatura: ServicioAsignaturasService, private gestorRutasActivas: ActivatedRoute) { }

  ngOnInit(): void {
    this.cicloArray = this.servicioCiclo.getAllCiclos();
    this.asiganturasArray = this.servicioAsignatura.getAllAsignatura();
    this.gestorRutasActivas.paramMap.subscribe(param => {
      this.nombreCiclo = "";
      this.cursoCiclo = 1;

     //this.cursoCiclo = parseInt(param.get('curso'));
     //this.nombreCiclo = param.get('nombre');

      this.verDetalleDam(this.cursoCiclo, this.nombreCiclo);
      this.asiganturasArrayFiltradas = this.servicioAsignatura.getAsignaturasFiltradas(this.nombreCiclo, this.cursoCiclo);
    })
  }

  verDetalleDam(curso: number, titulo: string) {
    this.cicloArray.forEach(ciclo => {
      if (ciclo.nombre === titulo && ciclo.curso === curso) {
        this.cicloDetalle = ciclo;
        console.log(ciclo.curso);
      } else {
        console.log('nulo');

      }
    });
    this.asiganturasArray.forEach(modulo => {
      if (modulo.curso === curso && modulo.ciclo.includes('DAM')) {
        modulo.conocimientos.forEach(asignatura => {
          this.cicloDetalle.asignaturas.push(asignatura);
        });
      }
    });
    console.log("Asignaturas " + this.cicloDetalle.asignaturas.length);

  }

  verDetalleDaw(curso: number, titulo: string) {
    this.cicloArray.forEach(ciclo => {
      if (ciclo.nombre === titulo && ciclo.curso === curso) {
        this.cicloDetalle = ciclo;
        console.log(ciclo.curso);
      } else {
        console.log('nulo');

      }
    });
    this.asiganturasArray.forEach(modulo => {
      if (modulo.curso === curso && modulo.ciclo.includes('DAW')) {
        modulo.conocimientos.forEach(asignatura => {
          this.cicloDetalle.asignaturas.push(asignatura);
        });
      }
    });
  }
}
