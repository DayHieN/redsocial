import { EventosComponent } from './components/eventos/eventos.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { HomeComponent } from './components/home/home.component';
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
