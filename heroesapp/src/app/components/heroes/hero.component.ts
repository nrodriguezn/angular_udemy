import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; //activated es para capturar los parametros por urls
import { Heroe } from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  private heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  nuevo:boolean = false
  id:string;

  constructor(private router:Router, private _heroesService: HeroesService, private route:ActivatedRoute) {
    this.route.params
      .subscribe( parametros =>  {
          this.id = parametros['id']
          if(this.id !== "nuevo"){
            this._heroesService.getHeroe(this.id)
              .subscribe( heroe => this.heroe = heroe) //data es igual a heroe, el heroe que me retorna la llamada
          }
        })

  }

  ngOnInit() {
  }

    guardar(){
    console.log(this.heroe)

    if(this.id=="nuevo"){
      //insertando
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe( data =>{
              this.router.navigate(['/hero', data.name])
        },
        error=>console.log(error))
    }else{
    //actualizando
    this._heroesService.actualizarHeroe(this.heroe, this.id)
      .subscribe( data =>{
        console.log(data)
      },
      error=>console.log(error))
    }
  }

  agregarNuevo(forma:NgForm){
    this.router.navigate(['/hero','nuevo'])
    forma.reset({casa: "Marvel"})
  }

}
