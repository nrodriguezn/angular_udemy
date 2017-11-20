import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  fireURL:string="https://heroesapp-ec47d.firebaseio.com/heroes.json"

  constructor(private http:Http) { }

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

}
