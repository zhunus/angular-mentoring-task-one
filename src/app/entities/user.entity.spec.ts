import { User } from './User.entity';

describe('User entity tests', () => {
  it('should work', () => {
    const testUser = new User({
      id: 1,
      firstName: 'test',
      lastName: 'testov'
    });

    expect(testUser).toBeTruthy();
  });

  it('should provide default values if no data is passed', () => {
    const testUser = new User();

    expect(testUser.id).toBe(0);
    expect(testUser.firstName).toBe('');
    expect(testUser.lastName).toBe('');
  });

  it('should provide default values if some data is null', () => {
    const testUser = new User({
      id: null,
      firstName: null,
      lastName: null
    });

    expect(testUser.id).toBe(0);
    expect(testUser.firstName).toBe('');
    expect(testUser.lastName).toBe('');
  });
});
