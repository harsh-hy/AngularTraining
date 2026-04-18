import { Component } from '@angular/core';
import { Welcome } from '../welcome';

@Component({
  selector: 'app-service-example',
  standalone: false,
  templateUrl: './service-example.html',
  styleUrl: './service-example.css',
})
export class ServiceExample {
  constructor(public obj: Welcome) 
  {
    
  }
}
