// http.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:product[]=[];
  Id :number=1;

  constructor(private http: HttpClient) {
   
   }
  getProducts():Observable<product[]> {
  this.http.get<product[]>('http://localhost:3000/Products').subscribe(res=>
    {
      this.Products=res;
    })

   return  this.http.get<product[]>('http://localhost:3000/Products');
  }
  
  getProduct (Id :number) 
  { this.Id=Id;
     
      var result=this.Products.findIndex(productitem =>productitem.id ===Id);

      return result;



}
}