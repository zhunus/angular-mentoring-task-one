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
  public filter = '';

  constructor(private coursesService: CoursesService) {}

  addCourse(): string {
    return 'Add new course button is clicked!';
  }

  onDeleteCourse(course: Course): string {
    return 'Deleting course: ' + course.id;
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onSearch(searchQuery: string) {
    this.filter = searchQuery;
  }
}
