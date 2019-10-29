import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { SearchControlComponent } from '../search-control/search-control.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from '../course-item/course-item.component';
import { SharedModule } from '../../shared/shared.module';

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
        CourseItemComponent
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
});
