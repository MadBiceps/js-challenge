import { sumArray } from ".";

test('sumArray returns the correct sum for an array of positive integers', () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  expect(sumArray([10, 20, 30])).toBe(60);
});

test('sumArray returns the correct sum for an array of mixed integers', () => {
  expect(sumArray([0, 0, 0, 0])).toBe(0);
  expect(sumArray([-1, 2, -3, 4, -5])).toBe(-3);
});

test('sumArray returns the correct sum for an array of mixed numbers', () => {
  expect(sumArray([1.5, 2.5, 3.5])).toBe(7.5);
});

test('sumArray returns 0 for an empty array', () => {
  expect(sumArray([])).toBe(0);
});