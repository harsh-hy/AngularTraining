import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() countryName = '';

  private readonly statesByCountry: Record<string, string[]> = {
    'India': ['Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Kerala'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'],
    'United States': ['California', 'Texas', 'Florida', 'New York', 'Illinois'],
  };

  get states(): string[] {
    return this.statesByCountry[this.countryName] ?? [];
  }
}
