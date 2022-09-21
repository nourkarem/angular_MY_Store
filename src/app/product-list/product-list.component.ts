import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import {ProductsService} from  '../services/products.service'
import {CartService} from '../services/cart.service'
//import  data from './assets/data.json'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products :product[]=[];

  constructor( private productservice :ProductsService ,private  cartservice:CartService) { 
    }

  ngOnInit(): void {
   this.productservice.getProducts().subscribe(res=>{
    this.Products=res;
   });

      }
  
  detailedView(product:product)
  {

this.productservice.Id = product.id;

  }
 
}
