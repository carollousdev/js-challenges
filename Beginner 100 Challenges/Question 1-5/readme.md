# QUESTION 1 | HELLO WORLD

## Instructions

Write a function called `helloWorld` that returns a string of 'Hello World!'.

### Function Signature

```js
/**
    * Returns a string containing 'Hello World!'.
    * @returns {string} - The string 'Hello World!'.
*/
  function helloWorld(): string;
```

### Test

```js
test("Hello World | Collection of 2025 Javascript Testing", () => {
  expect(helloWorld()).toBe("Hello World!");
});
```

# QUESTION 2 | GET SUM

## Instructions

Write a function called `getSum` that takes in two numbers and returns the sum of those two numbers.

### Function Signature

```js
/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function getSum(a: number, b: number): number;
```

### Test

```js
test("Get Sum | Collection of 2025 Javascript Testing", () => {
  expect(getSum(1, 2)).toBe(3);
  expect(getSum(10, 5)).toBe(15);
  expect(getSum(2, 2)).toBe(4);
  expect(getSum(10, 5)).toBe(15);
});
```

# QUESTION 3 | CALCULATOR

## Instructions

Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

### Function Signature

```js
/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */
function calculator(num1: number, num2: number, operator: string): number;
```

### Test

```js
test("Calculator | Collection of 2025 Javascript Testing", () => {
  expect(calculator(1, 2, "+")).toBe(3);
  expect(calculator(10, 5, "-")).toBe(5);
  expect(calculator(2, 2, "*")).toBe(4);
  expect(calculator(4, 2, "/")).toBe(2);
});
```

# QUESTION 4 |COUNT OCCURRENCES

## Instructions

Write a function called `countOccurrences` that takes in a string and a character and returns the number of occurrences of that character in the string.

### Function Signature

```js
/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str: string, char: string): number;
```

### Test

```js
test("Count Occurrences | Collection of 2025 Javascript Testing", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("hello", "z")).toBe(0);
});
```

# QUESTION 5 | FIND MAX NUMBER

## Instructions

Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

### Function Signature

```js
/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr: number[]): number;
```

### Test

```js
test("Find Max Number | Collection of 2025 Javascript Testing", () => {
  expect(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
  expect(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])).toBe(10);
});
```
