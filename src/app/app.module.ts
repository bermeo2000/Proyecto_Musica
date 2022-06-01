import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';
import { GeneroComponent } from './paginas/genero/genero.component';
import { DatosComponent } from './paginas/datos/datos.component';
import { DescripcionComponent } from './paginas/descripcion/descripcion.component';
import { CuerpoComponent } from './divicion/cuerpo/cuerpo.component';
import { PiesComponent } from './divicion/pies/pies.component';
import { CabezaComponent } from './divicion/cabeza/cabeza.component';

import { HttpClientModule } from '@angular/common/http';
import { NuevoComponent } from './pag/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    InformacionComponent,
    GeneroComponent,
    DatosComponent,
    DescripcionComponent,
    CuerpoComponent,
    PiesComponent,
    CabezaComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
