import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { SearchControlComponent } from '../search-control/search-control.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from '../course-item/course-item.component';
import { SharedModule } from '../../shared/shared.module';
import { Course } from '../../entities/course.entity';
import { CoursesService } from '../../services/courses.service';
import { HighlightNewDirective } from '../highlight-new.directive';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule],
      declarations: [
        CoursesComponent,
        SearchControlComponent,
        CoursesListComponent,
        CourseItemComponent,
        HighlightNewDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string on adding new course', () => {
    const test = component.addCourse();
    expect(test).toEqual('Add new course button is clicked!');
  });

  it('should work as class testing', () => {
    const coursesService = new CoursesService();
    const coursesComponent = new CoursesComponent(coursesService);
    expect(coursesComponent.addCourse()).toEqual('Add new course button is clicked!');
  });

  it('should delete course', () => {
    const coursesService = new CoursesService();
    const coursesCount = coursesService.getCourses().length;
    const coursesComponent = new CoursesComponent(coursesService);
    const testCourse = new Course();
    coursesComponent.onDeleteCourse(testCourse);
    expect(coursesService.getCourses().length).toEqual(coursesCount - 1);
  });

  it('onSearch should set filter field', () => {
    const coursesService = new CoursesService();
    const coursesComponent = new CoursesComponent(coursesService);

    coursesComponent.onSearch('test');

    expect(coursesComponent.filter).toEqual('test');
  });
});
