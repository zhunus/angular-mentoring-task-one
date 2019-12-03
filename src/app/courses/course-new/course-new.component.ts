import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.css']
})
export class CourseNewComponent implements OnInit {
  public breadcrumbs = ['Courses', 'New Course'];
  public course = new Course();
  constructor() { }

  ngOnInit() {
  }

}
