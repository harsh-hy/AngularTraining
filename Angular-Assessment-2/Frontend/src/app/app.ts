import { Component } from '@angular/core';
import { AddCourse } from './components/add-course/add-course';
import { CourseList } from './components/course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [CourseList, AddCourse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
