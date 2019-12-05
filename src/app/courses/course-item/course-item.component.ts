import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course: Course;

  @Output()
  public delete: EventEmitter<Course> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.course);
  }
}
