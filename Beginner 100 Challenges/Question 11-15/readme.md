# QUESTION 11 | FIZZBUZZ ARRAY

## Instructions

FizzBuzz is probably the most common interview question for entry level developers. At least, it used to be. It may not be used as much because of how common it was. It's a simple problem that tests your ability to think logically and write clean code.

Traditionally, you loop from 1 to 100 and print out each number. However, if the number is divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you print out "Buzz" instead. If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.

In this challenge, you will write a function called fizzBuzzArray that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

### Function Signature

```js
/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num: number): any[];
```

### Constraints

- The number passed in will always be greater than 0
- The number passed in will always be an integer

### Test Cases

```js
test("FizzBuzz Array", () => {
  expect(fizzBuzzArray(15)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});
```

# QUESTION 12 | ARRAY INTERSECTION

## Instructions

Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

### Function Signature

```js
/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1: number[], arr2: number[]): number[];
```

### Constraints

- The input arrays can contain any number of elements
- The input arrays can contain any positive integer

### Test Cases

```js
test("Finding array intersection", () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
    3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
});
```

# QUESTION 13 | DISPLAY LIKES

## Instructions

Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

The function should return a string formatted as follows:

- If no one likes it, it should return 'no one likes this'
- If one person likes it, it should return '{name} likes this'
- If two people like it, it should return '{name1} and {name2} like this'
- If three people like it, it should return '{name1}, {name2} and {name3} like this'
- If more than three people like it, it should return '{name1}, {name2} and {x} others like this'

### Function Signature

```js
/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
function displayLikes(names: string[]): string;
```

### Constraints

- The input array will only contain strings

### Test Cases

```js
test("Display Likes", () => {
  expect(displayLikes([])).toEqual("no one likes this");
  expect(displayLikes(["Peter"])).toEqual("Peter likes this");
  expect(displayLikes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  expect(displayLikes(["Max", "John", "Mark"])).toEqual(
    "Max, John and Mark like this"
  );
  expect(displayLikes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
    "Alex, Jacob and 2 others like this"
  );
  expect(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"])).toEqual(
    "Alex, Jacob and 3 others like this"
  );
});
```

# QUESTION 14 | FIND THE MISSING NUMBER

## Instructions

Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

### Function Signature

```js
/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr: number[]): number;
```

### Constraints

- If an empty array is passed in, it should return 1
- If nothing is passed in, it should return undefined

### Test Cases

```js
test("Finding the missing number", () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
```

# QUESTION 15 | FIND MISSING LETTER

## Instructions

Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

### Function Signature

```js
/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr: string[]): string;
```

### Constraints

- The input array will only contain letters in one case (lower or upper)
- If no letters are in the array, return an empty string

### Test Cases

```js
test("Find Missing Letter", () => {
  expect(findMissingLetter(["a", "b", "c", "e"])).toBe("d");
  expect(findMissingLetter(["X", "Z"])).toBe("Y");
  expect(findMissingLetter(["m", "n", "o", "q", "r"])).toBe("p");
  expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
});
```
