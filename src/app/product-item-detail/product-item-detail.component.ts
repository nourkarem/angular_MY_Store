import { Component, OnInit ,Input ,OnChanges} from '@angular/core';
import { product } from '../models/product';
import {ProductsService} from  '../services/products.service'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() productItemdetailed: product;
  Id:number=1;
  
  Counts:number =1;
  constructor( private productservice :ProductsService,private  cartservice:CartService) {
    this.productItemdetailed={
   description:'',
   id:1,
   name:'',
   price:0,
   url:''}
   }


  ngOnInit(): void {
    this.Id =this.productservice.Id;
    

   var result   =this.productservice.getProduct(this.Id);
   this.productItemdetailed= this.productservice.Products[result];
    this.productservice.Products;

  
   
  }
  addtoCart(Product:product)
  {   
   this.cartservice.add(
     {
      id:Product.id,
      amount:this.Counts,
      price:Product.price,
      url:Product.url,
      name:Product.name,
     }
   );

   window.alert("Added to Cart!");
  
  }
  
  


 
}
