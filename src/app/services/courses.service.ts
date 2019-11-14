import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';
import { Course as ICourse } from '../interfaces/course';

import coursesMock from './courses.mocked';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = coursesMock;

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: ICourse): Course {
    const newCourse = new Course(course);
    this.courses.push(newCourse);
    return newCourse;
  }

  getCourse(id: number): Course {
    return this.courses.find(c => c.id === id);
  }

  updateCourse(id: number, data: ICourse): Course {
    const course = this.courses.find(c => c.id === id);
    if (course) {
      // TODO finish
    }

    return course;
  }

  removeCourse(id: number): void {
    const courseIndex = this.courses.findIndex(c => c.id === id);
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
