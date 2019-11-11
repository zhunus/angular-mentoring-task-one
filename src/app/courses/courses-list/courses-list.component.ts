import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input()
  courses: Course[];

  @Output()
  public delete: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onDelete(course: Course) {
    this.delete.emit(course);
  }
}
