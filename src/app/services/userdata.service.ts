import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  username:string='';
  address:string='';
  cardnumber:string='';
  constructor() { }
}
