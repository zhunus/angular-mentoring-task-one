import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import coursesMock from './courses.mocked';

describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('should return courses when getCourses called', () => {
    const services = new CoursesService();
    expect(services.getCourses()).toEqual(coursesMock);
  });
});
