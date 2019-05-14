import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HeaderComponent } from './templates/header/header.component';
import { ProfileTemplateComponent } from './templates/profile-template/profile-template.component';
import { MsglistComponent } from './components/msglist/msglist.component';
import { FormsModule } from '@angular/forms';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriasComponent,
    AmigosComponent,
    EventosComponent,
    HeaderComponent,
    ProfileTemplateComponent,
    MsglistComponent,
    ReactionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
