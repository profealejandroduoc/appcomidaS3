import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listacategorias:Categoria[]=[];
  
  constructor(private srv:DatosService) {}



  ngOnInit(){
    this.srv.getCategoria().subscribe(datos=>{
      console.log(datos.categories);
      this.listacategorias.push(...datos.categories);
      console.log("***LISTA OK***");
      console.log(this.listacategorias);
    })
  }

}
