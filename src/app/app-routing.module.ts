import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { DatosComponent } from './paginas/datos/datos.component';
import { DescripcionComponent } from './paginas/descripcion/descripcion.component';
import { GeneroComponent } from './paginas/genero/genero.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';


const routes: Routes = [
{ path: 'buscar', component: BuscarComponent },
{ path: 'informacion', component: InformacionComponent },
{ path: 'genero', component: GeneroComponent },
{ path: 'descripcion', component: DescripcionComponent },
{ path: '', component: DatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
