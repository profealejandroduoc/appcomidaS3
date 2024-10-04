import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  comidas:string="";
  lista:Comida[]=[];

  constructor(private router:Router, private srv:DatosService) { }

  ngOnInit() {
   let estado=this.router.getCurrentNavigation()?.extras.state
    if(estado!==undefined){
      console.log("categoria recibida");
      this.comidas=estado["cat_origen"];

      this.srv.getComidasxCategoria(estado["cat_origen"]).subscribe(datos=>{
        console.log(datos);
        this.lista.push(...datos.meals);
      })
    }
  }
}
