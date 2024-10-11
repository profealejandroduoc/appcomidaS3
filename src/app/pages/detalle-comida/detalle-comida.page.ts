import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/icomidas';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-detalle-comida',
  templateUrl: './detalle-comida.page.html',
  styleUrls: ['./detalle-comida.page.scss'],
})
export class DetalleComidaPage implements OnInit {

  listareceta:Receta[]=[]
  constructor(private router:Router, 
    private srv:DatosService,
    private db:AlmacenamientoService,
    ) { }

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
    console.clear();
    let estado=this.router.getCurrentNavigation()?.extras.state;
    if(estado!==undefined){
      this.srv.getReceta(estado['id']).subscribe(datos=>{
        this.listareceta.push(...datos.meals);
      });
    }

  }

  /*metodos de prueba*/
  save(){

    this.db.guardar('100',"hola padelman");
  }

  cargar(){
    let clave:string="100"
    let valor=this.db.leer(clave);
    valor.then(dato=>{
      console.log("DATOS DESDE STORAGE: " + dato);
    })
    
  }

}
