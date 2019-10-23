import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public breadcrumbs = ['Courses'];
  public courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

}
