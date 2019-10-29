import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { Course } from '../../entities/course.entity';
import { SharedModule } from '../../shared/shared.module';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CoursesListComponent, CourseItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = [
      new Course({
        id: 1,
        title: 'Test title ',
        description: 'test description',
        creationDate: new Date(),
        duration: 6000
      })
    ];
    spyOn(component.delete, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete message on delete', () => {
    const testCourse = new Course({
      id: 1,
      title: 'testTitle',
      description: 'description',
      creationDate: new Date(),
      duration: 1000
    });
    component.onDelete(testCourse);

    expect(component.delete.emit).toHaveBeenCalledWith(testCourse);
  });
});
