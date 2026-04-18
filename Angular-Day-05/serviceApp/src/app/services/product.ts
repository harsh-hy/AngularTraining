import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){}
  products = [
    { id : 1, pName : 'Apple', price : 100, mfgDate : '01/01/2020', expDate : '01/01/2025' },
    { id : 2, pName : 'Banana', price : 50, mfgDate : '12/12/2020', expDate : '01/08/2022' },
    { id : 3, pName : 'Orange', price : 75, mfgDate : '07/07/2021', expDate : '05/09/2026' },
    { id : 4, pName : 'Grapes', price : 200, mfgDate : '15/03/2021', expDate : '15/03/2024' },
    { id : 5, pName : 'Strawberry', price : 300, mfgDate : '20/10/2020', expDate : '20/10/2023' },
    { id : 6, pName : 'Chips', price : 20, mfgDate : '05/05/2021', expDate : '05/05/2025' },
    { id : 7, pName : 'Cookies', price : 50, mfgDate : '10/11/2020', expDate : '10/11/2024' },
    { id : 8, pName : 'Candy', price : 10, mfgDate : '25/08/2021', expDate : '25/08/2026' },
    { id : 9, pName : 'Chocolate', price : 30, mfgDate : '30/09/2020', expDate : '30/09/2023' },
    { id : 10, pName : 'Ice Cream', price : 50, mfgDate : '18/04/2021', expDate : '18/04/2024' }
  ]
  public displayProducts(): Array<{id, pName, price, mfgDate, expDate}> {
    return this.products;
  }
  public registerProduct(product: {id, pName, price, mfgDate, expDate}): void {
    this.products.push(product);
  }
}
