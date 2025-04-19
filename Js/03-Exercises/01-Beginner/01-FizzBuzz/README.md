# FizzBuzz Exercise

## Problem Statement

Write a function called `fizzBuzz` that takes a number as its parameter. The function should:

1. Print numbers from 1 to the given number
2. If the number is divisible by 3, print "Fizz" instead of the number
3. If the number is divisible by 5, print "Buzz" instead of the number
4. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number

## Example

```javascript
// Example usage:
fizzBuzz(15);

// Expected output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
```

## Instructions

1. Create a new file called `fizzBuzz.js`
2. Implement the `fizzBuzz` function according to the requirements
3. Test your solution with different input values
4. Compare your solution with the reference implementation

## Starter Code

```javascript
function fizzBuzz(n) {
  // Your code here
}

// Test your function
fizzBuzz(15);
```

## Hints

- Use a loop to iterate through numbers from 1 to n
- Use the modulo operator (%) to check if a number is divisible by another number
- Remember to check the "FizzBuzz" condition first (divisible by both 3 and 5)

## Additional Challenges

After completing the basic implementation:

1. Modify the function to return an array of the results instead of printing them
2. Allow the function to take custom divisors and words instead of just 3, 5, "Fizz", and "Buzz"
3. Optimize your solution for performance when dealing with large numbers
