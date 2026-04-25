import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject, tap, timeout } from 'rxjs';
import { Course } from '../models/course.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private static readonly COURSE_CACHE_KEY = 'course-dashboard-cache';
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly refreshTrigger = new Subject<void>();
  readonly refresh$ = this.refreshTrigger.asObservable();

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.apiBaseUrl).pipe(
      timeout(5000),
      tap((courses) => this.setCachedCourses(courses))
    );
  }

  addCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http
      .post<Course>(environment.apiBaseUrl, course)
      .pipe(
        timeout(5000),
        tap(() => this.refreshTrigger.next())
      );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.apiBaseUrl}/${id}`)
      .pipe(
        timeout(5000),
        tap(() => this.refreshTrigger.next())
      );
  }

  getCachedCourses(): Course[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const cachedValue = localStorage.getItem(CourseService.COURSE_CACHE_KEY);
    if (!cachedValue) {
      return [];
    }

    try {
      const parsed = JSON.parse(cachedValue) as Course[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private setCachedCourses(courses: Course[]): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(CourseService.COURSE_CACHE_KEY, JSON.stringify(courses));
  }
}
