import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { setupTestingRouterInternal } from '@angular/router/testing';
import { item} from '../models/items'

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cart:item[]=[];
  total: number=0;
  getTotal(): number {
    this.total=0;
    this.cart.forEach(element => {
   this.total+=element.amount*element.price;
      
    });  
  return this.total;
    
  }

  constructor() { }
  add(itemin :item):void
{  var res =this.cart.findIndex(item=> item.id==itemin.id);
  if(res ===-1)
  {  
    this.cart.push (itemin);
    
  
  }
  else {

    this.cart[res].amount=itemin.amount;
   
  
  }

 

}
}
