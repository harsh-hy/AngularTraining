import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComp } from '../child-comp/child-comp';

@Component({
  selector: 'app-parent-comp',
  standalone: true,
  imports: [CommonModule, ChildComp],
  templateUrl: './parent-comp.html',
  styleUrl: './parent-comp.css',
})
export class ParentComp {
  countries: string[] = ['India', 'Australia', 'United States'];

  selectedCountry = this.countries[0];

  selectCountry(countryName: string): void {
    this.selectedCountry = countryName;
  }
}

