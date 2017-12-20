import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: "Nicolas",
    apellido: "Rodriguez",
    corre: ""
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("ngForm: ",forma)
    console.log("Valor", forma.value)
    console.log("usuairio",this.usuario )
  }

}
