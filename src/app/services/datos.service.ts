import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/icomidas';

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


  getComidasxCategoria(){
    return this.httplclient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb`);
  }

}
