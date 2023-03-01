import { palindrome } from ".";

test('returns true for a simple palindrome', () => {
  expect(palindrome('racecar')).toBe(true);
});

test('returns true for a more complex palindrome', () => {
  expect(palindrome('A man, a plan, a canal, Panama!')).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(palindrome('hello world')).toBe(false);
});

test('ignores non-alphanumeric characters', () => {
  expect(palindrome('Was it a car or a cat I saw?')).toBe(true);
  expect(palindrome('No \'x\' in Nixon')).toBe(true);
});

test('is case-insensitive', () => {
  expect(palindrome('Madam')).toBe(true);
  expect(palindrome('Eva, can I see bees in a cave?')).toBe(true);
});