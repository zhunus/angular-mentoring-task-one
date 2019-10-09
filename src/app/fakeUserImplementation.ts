import { User } from './interfaces/user';

export class FakeUserImplementation implements User {
  id: number;
  firstName: string;
  lastName: string;
}
