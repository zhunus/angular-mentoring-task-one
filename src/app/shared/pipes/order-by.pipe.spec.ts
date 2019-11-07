import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort asc if ', () => {
    const arr = [{ id: 2 }, { id: 1 }, { id: 0 }, { id: 4 }, { id: 3 }];
    const expectedResult = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const result = pipe.transform(arr, 'id', 'asc');

    expect(result).toEqual(expectedResult);
  });

  it('should sort desc if ', () => {
    const arr = [{ id: 2 }, { id: 1 }, { id: 0 }, { id: 4 }, { id: 3 }];
    const expectedResult = [{ id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }];
    const result = pipe.transform(arr, 'id', 'desc');

    expect(result).toEqual(expectedResult);
  });
});
