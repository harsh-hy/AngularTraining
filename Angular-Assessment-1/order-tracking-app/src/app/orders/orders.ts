import { Component } from '@angular/core';

type OrderStatusCode = 0 | 1 | 2;

interface Order {
  id: number;
  productName: string;
  price: number;
  orderDate: string;
  status: OrderStatusCode;
}

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  protected readonly orders: Order[] = [
    { id: 101, productName: 'Wireless Keyboard', price: 49.99, orderDate: '2026-04-11', status: 0 },
    { id: 102, productName: 'Gaming Mouse', price: 35.5, orderDate: '2026-04-09', status: 1 },
    { id: 103, productName: '27-inch Monitor', price: 279.0, orderDate: '2026-04-04', status: 2 },
    { id: 104, productName: 'USB-C Hub', price: 24.75, orderDate: '2026-04-01', status: 1 },
    { id: 105, productName: 'Noise Cancelling Headphones', price: 129.99, orderDate: '2026-03-28', status: 0 },
  ];
}
