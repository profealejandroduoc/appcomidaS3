import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias, Comidas, Recetas } from '../interfaces/icomidas';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httplclient:HttpClient) { }

  getCategoria()
  {
    //https://www.themealdb.com/api/json/v1/1/categories.php
    return this.httplclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);

  }


  getComidasxCategoria(categoria:string){
    return this.httplclient.get<Comidas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
  }


  getReceta(id:string){
    return this.httplclient.get<Recetas>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
