import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if no data is provided', () => {
    expect(pipe.transform(null, '')).toEqual(null);
  });

  it('should return data if no args provided', () => {
    const data = [1, 2, 3];
    expect(pipe.transform(data, '')).toEqual(data);
  });

  it('should return filtered data ', () => {
    const data = ['hello', 'world'];
    const expectedResult = ['hello'];
    const result = pipe.transform(data, 'hello');

    expect(result).toEqual(expectedResult);
  });
});
