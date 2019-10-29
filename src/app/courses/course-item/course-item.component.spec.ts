import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { SharedModule } from '../../shared/shared.module';
import { Course } from '../../entities/course.entity';

describe('CourseComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CourseItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = new Course({
      id: 1,
      title: 'Test title ',
      description: 'test description',
      creationDate: new Date(),
      duration: 6000
    });
    spyOn(component.delete, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit course on delete', () => {
    const testCourse = new Course({
      id: 1,
      title: 'testTitle',
      description: 'description',
      creationDate: new Date(),
      duration: 1000
    });
    component.course = testCourse;

    component.onDelete();

    expect(component.delete.emit).toHaveBeenCalledWith(testCourse);
  });
});
