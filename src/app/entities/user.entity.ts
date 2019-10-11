import { User as IUser } from '../interfaces/user';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;

  constructor(data: IUser) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
  }
}
