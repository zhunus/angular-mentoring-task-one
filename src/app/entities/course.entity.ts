import { Course as ICourse } from '../interfaces/course';

export class Course implements ICourse {
  constructor(
    public id = 0,
    public title = '',
    public creationDate = new Date(),
    public duration = 0,
    public description = ''
  ) {}
}
