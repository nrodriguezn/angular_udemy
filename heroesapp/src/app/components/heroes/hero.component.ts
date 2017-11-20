import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  constructor(private router:Router, private _heroesService: HeroesService) { }

  ngOnInit() {
  }

    guardar(){
    console.log(this.heroe)
    this._heroesService.nuevoHeroe(this.heroe)
      .subscribe( data =>{
            this.router.navigate(['/hero', data.name])
      },
      error=>console.log(error))
  }

}
