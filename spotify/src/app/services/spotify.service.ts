import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = []
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  urlToken:string= "https://accounts.spotify.com/api/token"
  token:string = "BQDUI3w78ju8UYAQon3MQ71How0lGTzSW_SniYkiLVkIiRB05ouvtYcfonh1pURglFVt558gfoyiNCSuId4bOQ"

  constructor( private http:Http ) { }

  getArtistas( termino:string ) {
    console.log("Get Artistas")
    let headers = new Headers();
    //let token = 'BQAea-bxEMKCi_ImdG30fvI-vDjjyxJEYz7qjJkfpNXHP7frjdxRVey1M9deMp9zO4J5Anj1OVm8lcaP1AwqlA';
    headers.append('authorization', `Bearer ${this.token}`);

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
        .map(res => {
        //console.log(res.json().artists.items)
        this.artistas = res.json().artists.items;
        return res.json().artists;
    })
  }

  getArtista( id:string ) {
    let headers = new Headers();
    //let token = 'BQAea-bxEMKCi_ImdG30fvI-vDjjyxJEYz7qjJkfpNXHP7frjdxRVey1M9deMp9zO4J5Anj1OVm8lcaP1AwqlA';
    headers.append('authorization', `Bearer ${this.token}`);

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
        .map(res => {
        //this.artistas = res.json().artists.items;
        return res.json();
    })
  }
    getTop( id:string ) {
    let headers = new Headers();
    //let token = 'BQAea-bxEMKCi_ImdG30fvI-vDjjyxJEYz7qjJkfpNXHP7frjdxRVey1M9deMp9zO4J5Anj1OVm8lcaP1AwqlA';
    headers.append('authorization', `Bearer ${this.token}`);

    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
        .map(res => {
        //this.artistas = res.json().artists.items;
        console.log(res.json().tracks)
        return res.json().tracks;
    })
  }

}
