import { Component } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-display',
  standalone: false,
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  constructor(public srv: Product) 
  {

  }
}
