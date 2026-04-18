import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() childName: string = "";
}
