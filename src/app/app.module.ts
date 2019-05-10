import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HistoriasComponent } from './templates/historias/historias.component';
import { AmigosComponent } from './templates/amigos/amigos.component';
import { EventosComponent } from './templates/eventos/eventos.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ProfileTemplateComponent } from './templates/profile-template/profile-template.component';
import { MsglistComponent } from './components/msglist/msglist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriasComponent,
    AmigosComponent,
    EventosComponent,
    HeaderComponent,
    FooterComponent,
    ProfileTemplateComponent,
    MsglistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
