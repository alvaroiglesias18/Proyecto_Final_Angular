import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CiclosComponent } from './component/ciclos/ciclos.component';
import { AsignaturasComponent } from './component/asignaturas/asignaturas.component';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';
import { DetalleCicloComponent } from './component/detalle-ciclo/detalle-ciclo.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    AsignaturaComponent,
    DetalleCicloComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
