/**
 * Write a recursive function called sumArray that takes an array of numbers as an argument
 * and returns the sum of all the numbers in the array. Your function should use recursion,
 * and should not use any built-in array methods (such as reduce or forEach).
 *
 * For example, sumArray([1, 2, 3, 4, 5]) should return 15 (which is 1 + 2 + 3 + 4 + 5), and sumArray([10, 20, 30]) should return 60.
 */
export function sumArray(arr) {
  if(arr.length === 0) {
    return 0
  } else {
    const [first, ...rest] = arr
    return first + sumArray(rest)
  }
}

/**
 * Write a function called palindrome that takes a string as an argument and returns true if the string is a palindrome,
 * and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward
 * as forward (ignoring spaces, punctuation, and capitalization).
 * 
 * For example, palindrome("racecar") should return true, palindrome("A man, a plan, a canal, Panama!") should return true,
 * and palindrome("hello world") should return false.
 * 
 * Your function should ignore any non-alphanumeric characters (such as spaces and punctuation) and should be case-insensitive.
 */
export function palindrome(str) {
  const lowerCaseStr = str.toLowerCase()
  const alphaNumericStr = lowerCaseStr.replace(/[^a-z0-9]/gi, '')
  const reversedStr = alphaNumericStr.split('').reverse().join('')
  return alphaNumericStr === reversedStr
}