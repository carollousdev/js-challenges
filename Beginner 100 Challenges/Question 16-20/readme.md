# QUESTION 16 | ARE ALL CHRACTERS UNIQUE

## Instructions

Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

### Function Signature

```js
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str: string): boolean;
```

### Constraints

- It should be case sensitive, so a and A are considered different characters
- An empty string should return true by default

### Test Cases

```js
test("Unique Characters in a String", () => {
  expect(areAllCharactersUnique("abcdefg")).toBe(true);
  expect(areAllCharactersUnique("abcdefgA")).toBe(true);
  expect(areAllCharactersUnique("programming")).toBe(false);
  expect(areAllCharactersUnique("")).toBe(true);
  expect(areAllCharactersUnique("a")).toBe(true);
});
```

# QUESTION 17 | FIRST NON REPEATING CHARACTER

## Instructions

Write a function called findFirstNonRepeatingCharacter that takes in a string and returns the first non-repeating character in the string.

If there are no non-repeating characters, the function should return null.

### Function Signature

```js
/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str: string): string | null;
```

### Constraints

- The input string will only contain lowercase letters and spaces

### Test Cases

```js
test("Find First Non-Repeating Character", () => {
  expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(findFirstNonRepeatingCharacter("aabbcc")).toBe(null);
  expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
});
```

# QUESTION 18 | DICE GAME SIMULATION

## Instructions

Write a function called diceGameSimulation that simulates this dice game. The function should take one argument:

- numSimulations: The number of times to simulate the dice game.

The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled they lose and get a result of lose. Anything else and they get a result of roll again.

The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

- dice1: The value of the first dice (a random number between 1 and 6).
- dice2: The value of the second dice (a random number between 1 and 6).
- sum: The sum of the two dice values.
- result: The result of the roll, which can be "win", "lose", or "roll again".

### Function Signature

```js
/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations: number): Array;
```

### Constraints

### Test Cases

```js
test("Dice Game Simulation", () => {
  const numSimulations = 5;
  const simulationResults = diceGameSimulation(numSimulations);

  simulationResults.forEach((result) => {
    let sum = result.dice1 + result.dice2;
    expect(result.dice1).toBeLessThanOrEqual(6);
    expect(result.dice2).toBeLessThanOrEqual(6);
    if (sum === 7 || sum === 11) {
      results = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      results = "lose";
    } else results = "roll again";
    expect(result.result).toBe(results);
  });
});
```

# QUESTION 19 | FORMAT PHONE NUMBER

## Instructions

Write a function called formatPhoneNumber that takes in an array of numbers and returns a string representing the phone number formed by concatenating the numbers in the specified format.

### Function Signature

```js
/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(numbers: number[]): string;
```

### Constraints

- The input array will always have 10 numbers
- The numbers can be any integer from 0 to 9

### Test Cases

```js
test("Format Phone Number", () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  );
  expect(formatPhoneNumber([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe(
    "(502) 481-9637"
  );
  expect(formatPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe(
    "(999) 999-9999"
  );
});
```

# QUESTION 20 | VALIDATE EMAIL

## Instructions

Write a function called validateEmail that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an @ symbol and a . symbol.

### Function Signature

```js
/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email: string): boolean;
```

### Test Cases

```js
test("Valid Email Addresses", () => {
  expect(validateEmail("john@example.com")).toBe(true);
  expect(validateEmail("jane.doe@domain.org")).toBe(true);
});

test("Invalid Email Addresses", () => {
  expect(validateEmail("invalid-email")).toBe(false);
  expect(validateEmail("@domain.com")).toBe(false);
  expect(validateEmail("user@domain")).toBe(false);
});
```
