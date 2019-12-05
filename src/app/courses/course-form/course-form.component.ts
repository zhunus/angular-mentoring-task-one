import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {

  @Input()
  public course: Course;

  constructor() { }

  ngOnInit() {
  }

}
