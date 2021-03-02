import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturasComponent } from './component/asignaturas/asignaturas.component';
import { CiclosComponent } from './component/ciclos/ciclos.component';
import { DetalleCicloComponent } from './component/detalle-ciclo/detalle-ciclo.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: "Ciclos", component: CiclosComponent },
  { path: "Asignaturas", component: AsignaturasComponent },
  { path: "Home", component: HomeComponent },
  {path: "Detalle-Ciclo", component:DetalleCicloComponent},
  {path: "Detalle-Ciclo/:ciclo", component:DetalleCicloComponent},
  {path: "Detalle-Ciclo/:nombre/:curso", component:DetalleCicloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
