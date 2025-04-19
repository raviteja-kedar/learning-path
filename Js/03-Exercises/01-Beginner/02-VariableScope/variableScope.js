/**
 * Variable Scope Exercise
 *
 * This exercise explores the differences between var, let, and const
 * and how they behave in different scopes.
 */

// Task 1: Function Scope vs Block Scope
function scopeTest() {
  // Declare variables here
  // Create an if block
  // Print outside the block
}

// Task 2: Constant Variables
function constTest() {
  // Declare a constant primitive
  // Try to update it (in a comment)
  // Declare a constant object
  // Modify the object
  // Try to reassign the object (in a comment)
  // Print the object
}

// Task 3: Temporal Dead Zone
function temporalDeadZoneTest() {
  // Try to access before declaration (in a comment)
  // Declare the variable
  // Access after declaration
}

// Run all tests
console.log('Function Scope Test:');
scopeTest();

console.log('\nConst Test:');
constTest();

console.log('\nTemporal Dead Zone Test:');
temporalDeadZoneTest();
