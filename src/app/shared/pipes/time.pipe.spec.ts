import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  const pipe = new TimePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform number to formatted time', () => {
    expect(pipe.transform(60 * 1000)).toEqual('1 minute');
  });

  it('should transform 5000 to 5 seconds', () => {
    expect(pipe.transform(5 * 1000)).toEqual('5 seconds');
  });
});
