import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  emps: any =[
    {"emp_id": 1, "emp_name": "harsh", "emp_salary": 70000},
    {"emp_id": 2, "emp_name": "annu", "emp_salary": 20000},
    {"emp_id": 3, "emp_name": "pratham", "emp_salary": 30000},
    {"emp_id": 4, "emp_name": "salman", "emp_salary": 4000},
  ]
}
