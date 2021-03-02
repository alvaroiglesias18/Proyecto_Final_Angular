import { Component, OnInit } from '@angular/core';
import { ServicioAsignaturasService } from 'src/app/services/servicio-asignaturas.service';
import { AsignaturaInterfaz } from 'src/app/utils/AsignaturasInterfaz';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  arrayAsignaturas: AsignaturaInterfaz[] = [];
  arrayAsignaturasAux: AsignaturaInterfaz[] = [];
  constructor(private servicioAsigaturas: ServicioAsignaturasService) { }

  ngOnInit(): void {
    this.arrayAsignaturas = this.servicioAsigaturas.getAllAsignatura();
    this.arrayAsignaturasAux = this.servicioAsigaturas.getAllAsignatura();
  }

  cargarArrayAsignatura(nombre: string, ciclo: string, conocimiento: string): AsignaturaInterfaz[] {
    this.arrayAsignaturas = []
    console.log(nombre);
    console.log(ciclo);
    console.log(conocimiento);

    if (nombre === '' && ciclo === '' && conocimiento === '') {
      this.arrayAsignaturas = this.servicioAsigaturas.getAllAsignatura();
      console.log("he entrado");

    } else if (nombre !== '' && ciclo !== '' && conocimiento !== '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if ( asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase()) && conocimiento.toLocaleLowerCase().includes(conocimientos.nombre)) {
            this.arrayAsignaturas.push(asignatura);
          }
        });
      });

    } if (nombre !== '' && ciclo === '' && conocimiento === '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())) {
          this.arrayAsignaturas.push(asignatura);
        }
      });

    } if (nombre !== '' && ciclo !== '' && conocimiento === '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
          this.arrayAsignaturas.push(asignatura);
        }
      });

    } if (nombre === '' && ciclo !== '' && conocimiento === '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
          this.arrayAsignaturas.push(asignatura);
        }
      });

    } if (nombre === '' && ciclo !== '' && conocimiento !== '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase()) && conocimiento.toLocaleLowerCase().includes(conocimientos.nombre)) {
            this.arrayAsignaturas.push(asignatura);
          }
        });
      });

    } if (nombre === '' && ciclo === '' && conocimiento !== '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (conocimiento.toLocaleLowerCase().includes(conocimientos.nombre)){
            this.arrayAsignaturas.push(asignatura);
          }
        });
      });

    } if (nombre !== '' && ciclo === '' && conocimiento !== '') {
      this.arrayAsignaturasAux.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && conocimiento.toLocaleLowerCase().includes(conocimientos.nombre)) {
            this.arrayAsignaturas.push(asignatura);
          }
        });
      });

    }
    return this.arrayAsignaturas;
  }

}
