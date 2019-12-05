import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public breadcrumbs = ['Courses', 'Edit Course'];
  public course: Course;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.course = this.coursesService.getCourse(
      +this.route.snapshot.paramMap.get('id')
    );
    this.breadcrumbs.push(this.course.title);
  }
}
