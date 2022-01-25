import { MD5PipePipe } from './md5-pipe.pipe';

describe('MD5PipePipe', () => {
  it('create an instance', () => {
    const pipe = new MD5PipePipe();
    expect(pipe).toBeTruthy();
  });
});
