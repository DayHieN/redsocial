import { EventosComponent } from './templates/eventos/eventos.component';
import { AmigosComponent } from './templates/amigos/amigos.component';
import { HistoriasComponent } from './templates/historias/historias.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"historias", component:HistoriasComponent},
  {path:"amigos", component:AmigosComponent},
  {path:"eventos", component:EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
