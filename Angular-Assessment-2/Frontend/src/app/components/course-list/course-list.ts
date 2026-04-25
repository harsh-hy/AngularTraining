import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [NgClass],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit, OnDestroy {
  private readonly courseService = inject(CourseService);
  private readonly destroy$ = new Subject<void>();

  courses: Course[] = [];
  isLoading = false;
  errorMessage = '';
  isRefreshing = false;

  ngOnInit(): void {
    this.courses = this.courseService.getCachedCourses();
    this.loadCourses();

    this.courseService.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadCourses());
  }

  loadCourses(): void {
    this.isLoading = this.courses.length === 0;
    this.isRefreshing = this.courses.length > 0;
    this.errorMessage = '';

    this.courseService.getCourses().subscribe({
      next: (response) => {
        this.courses = response;
        this.isLoading = false;
        this.isRefreshing = false;
      },
      error: () => {
        this.errorMessage = 'API is slow/unreachable. Showing latest cached data if available.';
        this.isLoading = false;
        this.isRefreshing = false;
      }
    });
  }

  deleteCourse(id: number): void {
    this.errorMessage = '';
    this.courseService.deleteCourse(id).subscribe({
      error: () => {
        this.errorMessage = 'Delete failed. Please check API connection.';
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
