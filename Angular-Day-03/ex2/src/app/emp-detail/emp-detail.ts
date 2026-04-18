import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  standalone: false,
  templateUrl: './emp-detail.html',
  styleUrl: './emp-detail.css',
})
export class EmpDetail {
  emps: any = [
    { id: 101, name: 'Pratham', salary: 45000 },
    { id: 102, name: 'Annu', salary: 55000 },
    { id: 103, name: 'Harsh', salary: 65000 },
    { id: 104, name: 'Mukesh', salary: 75000 },
    { id: 105, name: 'John', salary: 85000 },
    { id: 106, name: 'Paul', salary: 95000 },
    { id: 107, name: 'George', salary: 105000 },
    { id: 108, name: 'Ringo', salary: 115000 },
  ];

  selectedEmp: any = null;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEmp = this.emps.find((emp: any) => emp.id === id) || null;
  }
}
