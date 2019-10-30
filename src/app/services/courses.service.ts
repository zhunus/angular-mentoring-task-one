import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';

import coursesMock from './courses.mocked';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = coursesMock;

  getCourses(): Course[] {
    return this.courses;
  }
}
