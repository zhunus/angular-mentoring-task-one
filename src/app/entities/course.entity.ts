import { Course as ICourse } from '../interfaces/course';

export class Course implements ICourse {
  id = 0;
  title = '';
  creationDate = new Date();
  duration = 0;
  description = '';
  topRated = false;

  constructor(data?: ICourse) {
    if (data) {
      this.id = data.id || 0;
      this.title = data.title || '';
      this.creationDate = data.creationDate || new Date();
      this.duration = data.duration || 0;
      this.description = data.description || '';
      this.topRated = data.topRated || false;
    }
  }
}
