import { isArray } from '../src/array';

test('[1] expect to be array', () => {
    expect(isArray([1])).toBe(true);
  });
