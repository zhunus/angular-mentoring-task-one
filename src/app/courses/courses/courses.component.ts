import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public breadcrumbs = ['Courses'];
  public courses: Course[] = [
    { title: 'Video course-item 1. Name tag', creationDate: new Date(), id: 0, description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.', duration: 1000 * 60 * 60 + 30 * 60 * 1000},
    { title: 'Video course-item 1. Name tag', creationDate: new Date(), id: 0, description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.', duration: 600 },
    { title: 'Video course-item 1. Name tag', creationDate: new Date(), id: 0, description: 'Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college\'s classes. They\'re published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.', duration: 600 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
