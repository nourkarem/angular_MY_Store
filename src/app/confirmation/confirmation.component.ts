import { Component, OnInit } from '@angular/core';
import{ UserdataService} from '../services/userdata.service'
import{ CartService} from '../services/cart.service'
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  username:string ='';
  address:string='';
  cardnumber:string ='';
  total:number=0;
  constructor( private userdata:UserdataService,private cartservice:CartService) { }

  ngOnInit(): void {

    this.username=this.userdata.username;
    this.address=this.userdata.address;
    this.cardnumber=this.userdata.cardnumber;
    this.total=this.cartservice.getTotal();
  }

}
