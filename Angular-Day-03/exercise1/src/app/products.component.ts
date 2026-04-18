import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      productId: 110,
      productName: 'Mobile',
      price: 142000,
      mfgDate: new Date(2014, 1, 12),
      expDate: new Date(2019, 1, 12)
    },
    {
      productId: 121,
      productName: 'Camera',
      price: 50000,
      mfgDate: new Date(2015, 2, 11),
      expDate: new Date(2018, 2, 11)
    },
    {
      productId: 101,
      productName: 'Earphone',
      price: 3000,
      mfgDate: new Date(2016, 3, 11),
      expDate: new Date(2020, 3, 11)
    },
    {
        productId: 102,
        productName: 'Laptop',
        price: 50000,
        mfgDate: new Date(2017, 4, 11),
        expDate: new Date(2021, 4, 11)
    },
    {
        productId: 103,
        productName: 'Tablet',
        price: 20000,
        mfgDate: new Date(2018, 5, 11),
        expDate: new Date(2022, 5, 11)  
    }
    
  ];
}
