import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = []
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artist";


  constructor( private http:Http ) { }

  getArtistas( termino:string ) {
    console.log("Get Artistas")
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDTH3ft8TUA4b6HvAX7zGCYNVa62lcHYhQ5EPO373A8dEWjbIvnpOUsR83nhb4rPD9Itd-pTaq_IOdIUiY7vQ');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
        .map(res => {
        //console.log(res.json().artists.items)
        this.artistas = res.json().artists.items;
        console.log(this.artistas)
        return res.json().artists;
    })
  }

}
