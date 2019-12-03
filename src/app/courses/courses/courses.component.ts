import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public breadcrumbs = ['Courses'];
  public courses: Course[] = [];
  public filter = '';

  constructor(private coursesService: CoursesService, private router: Router) {}

  addCourse(): void {
    this.router.navigateByUrl('/courses/new');
  }

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourse(course.id);
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onSearch(searchQuery: string) {
    this.filter = searchQuery;
  }
}
