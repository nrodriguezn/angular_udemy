import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = []
  loading:boolean = true
  public apiUrl:string = 'https://fletes-portales.herokuapp.com/api'

  constructor(private _heroesService:HeroesService) {
    this._heroesService.getHeroes()
      .subscribe( data  => {
        setTimeout(()=> {
            this.loading = false
            this.heroes = data}, 1500)
      })
   }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this._heroesService.borrarHeroe(key$)
      .subscribe( respuesta => {
        if(respuesta){
          console.error(respuesta)
        }else{
          //todo bien
          delete this.heroes[key$];
        }
      })
  }

  test(){
    this._heroesService.test()
    .subscribe(dato => {
      console.log(dato)
    })
  }

}
