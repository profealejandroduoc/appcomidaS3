import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/icomidas';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';
import { DatosService } from 'src/app/services/datos.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-comida',
  templateUrl: './detalle-comida.page.html',
  styleUrls: ['./detalle-comida.page.scss'],
})
export class DetalleComidaPage implements OnInit {

  listareceta:Receta[]=[];
  icono:string='heart-outline';
  constructor(private router:Router, 
    private srv:DatosService,
    private db:AlmacenamientoService,
    private asc:ActionSheetController,
    ) { }


  ngOnInit() {
    console.clear();
    let estado=this.router.getCurrentNavigation()?.extras.state;
    if(estado!==undefined){
      this.srv.getReceta(estado['id']).subscribe(datos=>{
        this.listareceta.push(...datos.meals);

      });
    }
    

  }



  async presentActionSheet() {

    const actionSheet = await this.asc.create({
      
      header: 'Actions',
      mode:'ios',
      buttons: [
        {
          text: 'Agregar a Favoritos',
          icon:this.icono,
          handler:()=>{
            this.save();
          }
          
        },
        {
          text: 'Share',
          handler:()=>{
            this.compartir();
          }
       
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


  compartir() {
    
  }

  /*metodos de prueba*/
  save(){
      console.log("Icono actual: " + this.icono);
      this.db.guardar(this.listareceta[0].idMeal,this.listareceta[0]);
      this.cambiarIcono(1);
  }

  cargar(){
    let clave:string="100"
    let valor=this.db.leer(clave);
    valor.then(dato=>{
      console.log("DATOS DESDE STORAGE: " + dato);
    })
    
  }

  cambiarIcono(accion:number){  
    
    if (accion===1){
      this.icono='heart';
      console.log(accion);
    }else{
      this.icono='heart-outline'
    }
   
  }

}
