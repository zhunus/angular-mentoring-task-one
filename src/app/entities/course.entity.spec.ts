import { Course } from './course.entity';

describe('Course entity tests', () => {
  it('should work', () => {
    const testCourse = new Course({
      id: 1,
      duration: 1000,
      creationDate: new Date(),
      description: 'description',
      title: 'title'
    });

    expect(testCourse).toBeTruthy();
  });

  it('should set defaults if no data is provided', () => {
    const testCourse = new Course();

    expect(testCourse.id).toEqual(0);
    expect(testCourse.title).toEqual('');
    expect(testCourse.description).toEqual('');
    expect(testCourse.creationDate).toBeTruthy();
    expect(testCourse.duration).toEqual(0);
  });

  it('should set defaults if some data is null', () => {
    const testCourse = new Course({
      id: null,
      duration: null,
      creationDate: null,
      description: null,
      title: null
    });

    expect(testCourse.id).toEqual(0);
    expect(testCourse.title).toEqual('');
    expect(testCourse.description).toEqual('');
    expect(testCourse.creationDate).toBeTruthy();
    expect(testCourse.duration).toEqual(0);
  });
});
