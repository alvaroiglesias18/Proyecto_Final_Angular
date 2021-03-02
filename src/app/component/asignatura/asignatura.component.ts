import { Component, Input, OnInit } from '@angular/core';
import { AsignaturaInterfaz } from 'src/app/utils/AsignaturasInterfaz';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura: AsignaturaInterfaz = {
    nombre: '',
    profesor: '',
    conocimientos: [
      
    ],
    ciclo: '',
    curso: 0,
  };
  

  constructor() { }

  ngOnInit(): void {
  }

}
