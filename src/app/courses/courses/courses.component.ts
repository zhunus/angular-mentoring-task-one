import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Course } from '../../entities/course.entity';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  public breadcrumbs = ['Courses'];
  public courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
    console.log('Constructor');
  }

  addCourse() {
    console.log('Add new course button is clicked!');
  }

  onDeleteCourse(course: Course): void {
    console.log('Deleting course: ' + course.id);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courses = this.coursesService.getCourses();
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
