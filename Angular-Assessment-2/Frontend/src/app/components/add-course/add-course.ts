import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  private readonly fb = inject(FormBuilder);
  private readonly courseService = inject(CourseService);

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  readonly courseForm = this.fb.group({
    title: ['', Validators.required],
    instructor: ['', Validators.required],
    duration: [null as number | null, [Validators.required, Validators.min(1)]]
  });

  get submitted(): boolean {
    return this.isSubmitting;
  }

  createCourse(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { title, instructor, duration } = this.courseForm.getRawValue();

    this.courseService
      .addCourse({
        title: title ?? '',
        instructor: instructor ?? '',
        duration: Number(duration)
      })
      .subscribe({
        next: () => {
          this.successMessage = 'Course created successfully.';
          this.isSubmitting = false;
          this.courseForm.reset();
        },
        error: () => {
          this.errorMessage = 'Unable to create course. Please try again.';
          this.isSubmitting = false;
        }
      });
  }
}
