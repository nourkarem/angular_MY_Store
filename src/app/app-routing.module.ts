import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ProductListComponent} from './product-list/product-list.component'
import {  ProductItemDetailComponent} from './product-item-detail/product-item-detail.component'
import{ CartComponent} from './cart/cart.component'
import { ConfirmationComponent} from './confirmation/confirmation.component'
const routes: Routes = [ 
{path :'' ,component :ProductListComponent},
{path: 'itemdetailed/:id', component:ProductItemDetailComponent},
{path:'cart',component: CartComponent},
{path:'confirmation',component: ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
