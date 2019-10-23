import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: 0,
      title: 'Video course-item 1. Name tag',
      creationDate: new Date(),
      description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 1000 * 60 * 60 + 30 * 60 * 1000
    },
    {
      id: 1,
      title: 'Video course-item 1. Name tag',
      creationDate: new Date(),
      description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 1000 * 60 * 60 + 30 * 60 * 1000
    },
    {
      id: 2,
      title: 'Video course-item 1. Name tag',
      creationDate: new Date(),
      description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 1000 * 60 * 60 + 30 * 60 * 1000
    },
    {
      id: 3,
      title: 'Video course-item 1. Name tag',
      creationDate: new Date(),
      description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 1000 * 60 * 60 + 30 * 60 * 1000
    },
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

}
