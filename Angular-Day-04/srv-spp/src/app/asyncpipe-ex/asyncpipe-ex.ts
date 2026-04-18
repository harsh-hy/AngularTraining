import { Component } from '@angular/core';

@Component({
  selector: 'app-asyncpipe-ex',
  standalone: false,
  templateUrl: './asyncpipe-ex.html',
  styleUrl: './asyncpipe-ex.css',
})
export class AsyncpipeEx {
  pizzaOrders$ = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Your order is ready for delivery. Enjoy your pizza!');
    }, 5000);
  });
}
