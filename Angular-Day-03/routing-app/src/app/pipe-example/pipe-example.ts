import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  standalone: false,
  templateUrl: './pipe-example.html',
  styleUrl: './pipe-example.css',
})
export class PipeExample {
  course_name = 'Angular Routing';
  course_price = 100;
  start_date = new Date(2024, 5, 1);
  course_description = 'Learn how to use Angular routing to create a single-page application.';
  student_details ={rollNo: 101, name: 'Pratham', uni: 'LPU'};
}
