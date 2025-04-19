/**
 * JavaScript Variable Declarations: var, let, and const
 *
 * This file demonstrates the different ways to declare variables in JavaScript
 * and explains their characteristics and use cases.
 */

// 1. var - Function-scoped variable declaration (older style)
// ----------------------------------------------------------

// Function scope example
function varScopeExample() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable as above!
    console.log('Inside block:', x); // 20
  }
  console.log('Outside block:', x); // Also 20 - the value was changed
}

varScopeExample();

// Hoisting example with var
function varHoistingExample() {
  console.log('Before declaration:', hoistedVar); // undefined (not an error)
  var hoistedVar = 50;
  console.log('After declaration:', hoistedVar); // 50
}

varHoistingExample();

// 2. let - Block-scoped variable declaration (ES6)
// -----------------------------------------------

// Block scope example
function letScopeExample() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable than outer y
    console.log('Inside block:', y); // 20
  }
  console.log('Outside block:', y); // 10 - the outer variable wasn't changed
}

letScopeExample();

// Hoisting behavior with let
function letHoistingExample() {
  // Accessing notYetDeclared here would cause a ReferenceError
  // This is called the "Temporal Dead Zone"
  // console.log(notYetDeclared); // Would cause error: Cannot access before initialization

  let notYetDeclared = 100;
  console.log('After declaration:', notYetDeclared); // 100
}

letHoistingExample();

// 3. const - Block-scoped constant declaration (ES6)
// -------------------------------------------------

// Basic constant declaration
const PI = 3.14159;
// PI = 3.14; // This would cause an error: Assignment to constant variable

// Objects with const
const person = {
  name: 'Alice',
  age: 25,
};

// While the binding is constant, object properties can be changed
person.age = 26; // This works!
person.country = 'USA'; // This works too!

// But reassigning the variable itself is not allowed
// person = { name: 'Bob' }; // This would cause an error

// Arrays with const
const numbers = [1, 2, 3];
numbers.push(4); // This works!
numbers[0] = 0; // This works too!

// But reassigning the array is not allowed
// numbers = [5, 6, 7]; // This would cause an error

// 4. When to use each declaration type
// -----------------------------------

// Use var when:
// - You need function-scoped variables
// - You need to support very old browsers without transpilation

// Use let when:
// - You need to reassign values
// - You want block scoping
// - You're working with loop counters

// Use const when:
// - You want immutable bindings (the default for most variables)
// - You're declaring object and array references that won't be reassigned
// - You want to prevent accidental reassignment

// 5. Best Practices
// ----------------

// Modern JavaScript best practice:
// - Use const by default
// - Use let when you need to reassign values
// - Avoid var in new code

// Bad practice (var)
var oldStyle = 'avoid this';
var oldStyle = 'redeclaring is allowed with var'; // No error!

// Good practice (const and let)
const defaultChoice = 'use const by default';
let mutableValue = 'use let when reassignment is needed';

// Block scope demonstration
{
  const blockScoped = 'only available in this block';
  let anotherBlockScoped = 'also only in this block';
}
// console.log(blockScoped); // Would cause error: blockScoped is not defined
