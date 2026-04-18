import { Component } from '@angular/core';

@Component({
  selector: 'app-if-example',
  standalone: false,
  templateUrl: './if-example.html',
  styleUrl: './if-example.css',
})
export class IfExample {
  hide: boolean = false;
  products: any=['Laptop', 'Mobile', 'Tablet', 55, false];
  emps: any=[
    {id: 1, name: 'John', salary: 50000},
    {id: 2, name: 'Jane', salary: 60000},
    {id: 3, name: 'Bob', salary: 55000},
    {id: 4, name: 'Alice', salary: 70000},
    {id: 5, name: 'Tom', salary: 45000}
  ];
}
