import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  fireURL:string="https://heroesapp-ec47d.firebaseio.com/heroe.json"
  heroeURL:string="https://heroesapp-ec47d.firebaseio.com/heroe"


  constructor(private http:Http) { }



//FIREBASE
  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe)
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    return this.http.post(this.fireURL, body, { headers } ) //URL, BODY, HEADERS
            .map(res=>{
            console.log(res.json())
            return res.json()
          })
  }

  actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe)
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    let url = `${this.heroeURL}/${ key$ }.json`
    return this.http.put(url, body, { headers } ) //URL, BODY, HEADERS
            .map(res=>{
            console.log("Actualizar servicio")
            console.log(res.json())
            return res.json()
          })
  }

  getHeroe(key$:string){
    let url = `${ this.heroeURL }/${ key$}.json`
    return this.http.get(url)
      .map(res=>res.json())
  }

  getHeroes(){
    return this.http.get(this.fireURL)
      .map(res=>res.json())
  }

  borrarHeroe(key$:string){
    let url = `${this.heroeURL}/${key$}.json`
    return this.http.delete(url)
      .map( res => res.json() )
  }

}
