import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Welcome {
  constructor() {}
  welcome()
  {
    alert("Welcome to Angular Training!");
  }
}
