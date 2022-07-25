import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';

import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// PASO 3 ------------------------INYECTAMOS EL SERVICIO -----------------------


export class AppComponent {
  
  pokemons: any=[];
  nombre: string="";
  pokemon:any=null;
  urlImage: string;
  noEncontrado: string="";
  error: HttpErrorResponse;
  existePokemon: string="";

  constructor(private pokemonService: PokemonService){

    this.pokemonService.getAll().subscribe((datos:any)=>{
      this.pokemon=datos.result;
    }

  )};

        
  buscar(){
       
    this.pokemonService.buscar(this.nombre).subscribe((item:any)=>{     
      this.pokemon=item;
      this.urlImage=item.sprites.front_default;
      this.noEncontrado="";
      this.existePokemon="S";
      return null;
     },
    (err: any) => {
      console.log(err);
      console.log("Error de servidor: " + err.status );
      console.log("MENSAJE: " +err.message);
      this.noEncontrado= err.message;
      this.existePokemon="N";
      var posicion = this.noEncontrado.lastIndexOf("4") +2;
      //console.log("posicion es " + posicion);
      this.noEncontrado=this.noEncontrado.substring(0,posicion);
      //console.log("NoEncotrado es: " + this.noEncontrado);
    
    }
    )
  }
  
  
  };
      
       


  
   






