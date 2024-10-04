import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listacategorias:Categoria[]=[];
  
  constructor(private srv:DatosService, private router:Router) {}



  ngOnInit(){
    this.srv.getCategoria().subscribe(datos=>{
      console.log(datos.categories);
      this.listacategorias.push(...datos.categories);
      console.log("***LISTA OK***");
      console.log(this.listacategorias);
    })
  }

  verComidas(categoria:string){
    //console.log(categoria);
    let xtras:NavigationExtras={
      state:{
        cat_origen:categoria
      }
    }
    this.router.navigate(['/comidas'],xtras);
  }

}
