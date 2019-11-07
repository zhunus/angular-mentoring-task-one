import { HighlightNewDirective } from './highlight-new.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item/course-item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Course } from '../entities/course.entity';
import { addDays, addHours } from 'date-fns';

describe('HighlightNewDirective', () => {
  let fixture: ComponentFixture<CourseItemComponent>;
  let component: CourseItemComponent;
  let des: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HighlightNewDirective, CourseItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    des = fixture.debugElement.query(By.directive(HighlightNewDirective));
  });

  it('should create an instance', () => {
    expect(des).toBeTruthy();
  });

  it('should highlight new course with green', () => {
    component.course = new Course({
      id: 0,
      title: '',
      description: '',
      duration: 600,
      creationDate: addHours(new Date(), -2),
      topRated: false
    });
    fixture.detectChanges();
    expect(des.nativeElement.style.border).toEqual('2px solid var(--success)');
  });

  it('should highlight upcoming course with blue', () => {
    component.course = new Course({
      id: 0,
      title: '',
      description: '',
      duration: 600,
      creationDate: addHours(new Date(), 2),
      topRated: false
    });
    fixture.detectChanges();
    expect(des.nativeElement.style.border).toEqual('2px solid var(--blue)');
  });
});
