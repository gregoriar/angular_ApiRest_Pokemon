import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// PASO 1: ------------------Declaramos el SERVICIO --------------------------------

export class PokemonService {

   //Fases de la declaracion del servicio
  /*1º Declaracion de las variables a utilizar o instanciar */

  url="https://pokeapi.co/api/v2/pokemon";
  cabezeras= new HttpHeaders({'Content-type':"application/json"});
  

 // PASP 2: Generar la petición get y post

 //  constructor() { }

   constructor(private http:HttpClient) {}

   public getAll(){
      this.http.get(this.url,{headers:this.cabezeras});
      
      /*this.http.console.error();
      
      
      let eject=this.url.
      console.log("Error es " + eject);*/
      
    return this.http.get(this.url, {headers:this.cabezeras});
   } 

   public buscar(nombre: string){
    let otraUrl=this.url + "/" + nombre;
  
    return this.http.get(otraUrl,{headers:this.cabezeras});
   }
}