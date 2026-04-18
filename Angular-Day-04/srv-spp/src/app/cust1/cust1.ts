import { Component } from '@angular/core';

@Component({
  selector: 'app-cust1',
  standalone: false,
  templateUrl: './cust1.html',
  styleUrl: './cust1.css',
})
export class Cust1 {
  side1: number = 5;
  side2: number = 10;
  side3: number = 15;

  dataSize: number = 2048 * 7;
  dataSize2: number = 2048 + 1024;
  dataSize3: number = 2048 + 1024 + 1024;
  dataType: string = 'KB';

  byteData1: number = 20480000;
  byteData2: number = 2048 + 1024;
}
