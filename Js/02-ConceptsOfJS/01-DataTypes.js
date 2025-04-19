/**
 * JavaScript Data Types Example
 *
 * This file demonstrates the various data types in JavaScript
 */

// Primitive Types
// ---------------

// 1. Number
const integer = 42;
const float = 3.14;
const infinity = Infinity;
const notANumber = NaN;

console.log('Numbers:', integer, float, infinity, notANumber);

// 2. String
const singleQuotes = 'Hello';
const doubleQuotes = 'World';
const templateLiteral = `${singleQuotes}, ${doubleQuotes}!`;

console.log('Strings:', singleQuotes, doubleQuotes, templateLiteral);

// 3. Boolean
const trueValue = true;
const falseValue = false;

console.log('Booleans:', trueValue, falseValue);

// 4. Undefined
let undefinedVariable;

console.log('Undefined:', undefinedVariable);

// 5. Null
const nullValue = null;

console.log('Null:', nullValue);

// 6. Symbol (ES6)
const uniqueSymbol = Symbol('description');
const anotherSymbol = Symbol('description');

console.log('Symbols are unique:', uniqueSymbol === anotherSymbol);
console.log('Symbol description:', uniqueSymbol.description);

// 7. BigInt (ES2020)
const bigInteger = 9007199254740991n; // The 'n' suffix creates a BigInt

console.log('BigInt:', bigInteger);

// Reference Types
// --------------

// 1. Object
const person = {
  name: 'John',
  age: 30,
  isEmployed: true,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

console.log('Object:', person);
console.log('Object method:', person.greet());

// 2. Array
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log('Array:', fruits);
console.log('Array element:', fruits[1]);

// 3. Function
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;

console.log('Function results:', add(5, 3), subtract(10, 4), multiply(2, 6));

// Type Checking
console.log('\nType checking:');
console.log('typeof integer:', typeof integer);
console.log('typeof singleQuotes:', typeof singleQuotes);
console.log('typeof person:', typeof person);
console.log('typeof fruits:', typeof fruits);
console.log('Array.isArray(fruits):', Array.isArray(fruits));
console.log('typeof add:', typeof add);

// Type Coercion
console.log('\nType coercion:');
console.log('5' + 3); // String concatenation: '53'
console.log('5' - 3); // Numeric subtraction: 2
console.log('5' * '3'); // Numeric multiplication: 15
console.log(true + 1); // 2 (true is coerced to 1)
console.log(false + 1); // 1 (false is coerced to 0)
