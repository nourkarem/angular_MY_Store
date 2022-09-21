import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { product } from '../models/product';
import {item } from '../models/items'
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() Product: product;
 @Output() imagClicked :EventEmitter<product>= new EventEmitter;

  Counts:number =1;
  constructor(private  cartservice:CartService) {
    this.Product={
   description:'',
   id:1,
   name:'',
   price:0,
   url:''}
   }


  ngOnInit(): void {

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
