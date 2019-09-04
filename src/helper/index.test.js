import { max_number } from './index';

describe('max_numnber', () => {
  describe('given an empty array', () => {
    test('returns 0', () => {
      expect(max_number([])).toBe(0);
    });
  });
  describe('given an array of numbers', () => {
    test('returns the max number', () => {
      expect(max_number([1, 2, 3])).toBe(3);
    });
  });
  
});
