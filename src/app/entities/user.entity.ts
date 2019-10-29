import { User as IUser } from '../interfaces/user';

export class User implements IUser {
  id = 0;
  firstName = '';
  lastName = '';

  constructor(data?: IUser) {
    if (data) {
      this.id = data.id || 0;
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
    }
  }
}
