import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,EventEmitter } from '@angular/core';
import {item} from '../models/items'
import {CartService} from '../services/cart.service'
import{ UserdataService} from '../services/userdata.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private userdataservice:UserdataService) { 
   
  }
 cart:item[]=[];
 total:number=0;
  username:string='';
  address:string='';
  creditcardnumber:string ='';

  ngOnInit(): void {
    this.cart=this.cartService.cart;
    this.total=this.cartService.getTotal();
    this.username='';
  }

  valuechange(event :item)
  { 
    var res= this.cartService.cart.findIndex(item=> item.id ==event.id);
  
   
    if(res !== -1)
    {   
    
     this.total=this.cartService.getTotal();

    this.cartService.cart[res].amount=event.amount;
    this.cart[res].amount=event.amount;
    
   
    }
 
    if(event.amount===0)
     {window.alert("Removed from Cart!");
      this.cart= this.cart.filter(cartitem =>cartitem.amount !=0);
      this.cartService.cart= this.cartService.cart.filter(cartitem =>cartitem.amount !=0);
     
    }
 

  }
  Confirmation()
  {  
       this.userdataservice.username=this.username;
       this.userdataservice.address=this.address;
       this.userdataservice.cardnumber=this.creditcardnumber;

       
  }

}
