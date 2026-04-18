import { Component, signal } from '@angular/core';
import { ParentComp } from "./parent-comp/parent-comp";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CompToComp');
}
