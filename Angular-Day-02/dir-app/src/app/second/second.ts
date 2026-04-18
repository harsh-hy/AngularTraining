import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  template: `<p>Welcome to second component</p>`,
  styleUrl: './second.css',
})
export class Second {
   title = 'this is the example component';
}
