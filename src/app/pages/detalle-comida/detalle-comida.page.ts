import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-detalle-comida',
  templateUrl: './detalle-comida.page.html',
  styleUrls: ['./detalle-comida.page.scss'],
})
export class DetalleComidaPage implements OnInit {

  listareceta:Receta[]=[]
  constructor(private router:Router, private srv:DatosService) { }
  public actionSheetButtons = [
    {
      text: 'Agregar a Favoritos',
      icon:"heart-outline",
      role: 'destructive',
     
      
    },
    {
      text: 'Share',
      icon:'share-social',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  ngOnInit() {
    let estado=this.router.getCurrentNavigation()?.extras.state;
    if(estado!==undefined){
      this.srv.getReceta(estado['id']).subscribe(datos=>{
        this.listareceta.push(...datos.meals);
      });
    }

  }

}
