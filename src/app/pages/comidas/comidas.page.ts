import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   let estado=this.router.getCurrentNavigation()?.extras.state
    if(estado!==undefined){
      console.log("categoria recibida");
      console.log(estado["cat_origen"]);
    }
  }
}
