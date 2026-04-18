import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  product:{ id, pName, price, mfgDate, expDate} = {id: null, pName: '', price: '', mfgDate: '', expDate: ''};
  constructor(private objSrv: Product) {

  }
  register() {
    this.objSrv.registerProduct(this.product);
    alert("Product Registered Successfully");
    this.product = {id: null, pName: '', price: '', mfgDate: '', expDate: ''};
  }
}
