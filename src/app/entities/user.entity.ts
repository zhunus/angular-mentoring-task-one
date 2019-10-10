import { User as IUser } from '../interfaces/user';

export class User implements IUser {
  constructor(public id = 0, public firstName = '', public lastName = '') {}
}
