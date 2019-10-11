import { Course as ICourse } from '../interfaces/course';

export class Course implements ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;

  constructor(data: ICourse) {
    this.id = data.id || 0;
    this.title = data.title || '';
    this.creationDate = data.creationDate || new Date();
    this.duration = data.duration || 0;
    this.description = data.description || '';
  }
}
