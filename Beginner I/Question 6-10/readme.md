# QUESTION 6 | TITLE CASE

## Instructions

Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

### Function Signature

```js
/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str: string): string;
```

### Examples

```js
test("Title Case | Collection of 2025 Javascript Testing", () => {
  expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
    "Here Is My Handle Here Is My Spout"
  );
});
```

# QUESTION 7 | REVERSE STRING

## Instructions

Write a function called `reverseString` that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str: string): string;
```

### Examples

```js
test("Reverse String | Collection of 2025 Javascript Testing", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("")).toBe("");
});
```

# QUESTION 8 | IS PALINDROME

## Instructions

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

### Function Signature

```js
/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str: string): boolean;
```

### Examples

```js
test("Is Palindrome | Collection of 2025 Javascript Testing", () => {
  expect(isPalindrome("madam")).toBe(true);
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("")).toBe(true);
});
```

# QUESTION 9 | COUNT VOWELS

## Instructions

Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.

### Function Signature

```js
/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str: string): number;
```

### Examples

```js
test("Count Vowels | Collection of 2025 Javascript Testing", () => {
  expect(countVowels("hello")).toBe(2);
  expect(countVowels("why")).toBe(0);
  expect(countVowels("mississippi")).toBe(4);
});
```

# QUESTION 10 | REMOVE DUPLICATES

## Instructions

Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

### Function Signature

```js
/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr: any[]): any[];
```

### Examples

```js
test("Count Vowels | Collection of 2025 Javascript Testing", () => {
  expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe([1]);
  expect(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello' 2, 3, 'hello', true])).toBe([1, 2, 3, 4, 5, true, 'hello']);
});
```
