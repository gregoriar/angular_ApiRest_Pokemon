import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Ojo!!! es importante hacer la importacion manual
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
 

  ],
  providers: [PokemonService],   //<----Declarar el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
