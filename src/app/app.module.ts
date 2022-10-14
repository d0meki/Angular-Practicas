import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorMoudle } from './Mcontador/contador.module';
import { ContadorComponent } from './Mcontador/contador/contador.component';
import { HeroesModule } from './Mheores/Mheores.module';
// import { HereoComponent } from './Mheores/heroe/heroe.component';
// import { ListadoComponent } from './Mheores/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorMoudle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
