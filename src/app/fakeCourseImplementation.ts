import { Course } from './interfaces/course';

export class FakeCourseImplementation implements Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}
