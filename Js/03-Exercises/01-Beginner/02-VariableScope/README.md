# Variable Scope Exercise

## Problem Statement

In this exercise, you will practice using different variable declarations (`var`, `let`, and `const`) and understand how they behave in different scopes.

## Tasks

1. Create a file called `variableScope.js`
2. Implement the following functions:

### Task 1: Function Scope vs Block Scope

Create a function called `scopeTest` that demonstrates the difference between `var` and `let` inside blocks:

- Declare a variable `x` using `var` and set it to 10
- Declare a variable `y` using `let` and set it to 20
- Create an if block (condition always true) that:
  - Redeclares `x` using `var` and sets it to 30
  - Redeclares `y` using `let` and sets it to 40
  - Prints both variables inside the block
- Outside the block, print both variables again
- Explain the output in comments

### Task 2: Constant Variables

Create a function called `constTest` that demonstrates how `const` works:

- Declare a constant `PI` and set it to 3.14
- Try to update `PI` (in a commented line to avoid errors)
- Declare a constant object `person` with properties for name and age
- Modify a property of the `person` object
- Try to reassign the `person` variable (in a commented line)
- Print the final value of the `person` object
- Explain in comments why some operations are allowed and others aren't

### Task 3: Temporal Dead Zone

Create a function called `temporalDeadZoneTest` that demonstrates the "temporal dead zone" with `let` and `const`:

- Try to access a variable before it's declared (in a commented line)
- Declare the variable with `let`
- Access it after declaration
- Explain what happens in comments

## Example Expected Output

```
Function Scope Test:
Inside block: x = 30, y = 40
Outside block: x = 30, y = 20

Const Test:
Person after modification: { name: 'John', age: 31, country: 'USA' }

Temporal Dead Zone Test:
Value after declaration: test
```

## Hints

- Remember that `var` is function-scoped, while `let` and `const` are block-scoped
- With `const`, the binding is immutable, but object properties can be changed
- Variables declared with `let` and `const` cannot be accessed before declaration
