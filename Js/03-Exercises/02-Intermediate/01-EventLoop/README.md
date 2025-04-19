# Event Loop Exercise

## Problem Statement

In this exercise, you will practice understanding the order of execution in JavaScript's event loop model. You will create a series of asynchronous and synchronous operations to visualize how the call stack, callback queue, and microtask queue interact.

## Tasks

1. Create a file called `eventLoop.js`
2. Implement the following functions:

### Task 1: Predict the Output

Write a function called `predictOutput` that contains the following code:

```javascript
function predictOutput() {
  console.log('Start');

  setTimeout(() => {
    console.log('Timeout 1');
  }, 0);

  Promise.resolve().then(() => {
    console.log('Promise 1');
  });

  Promise.resolve().then(() => {
    console.log('Promise 2');
    setTimeout(() => {
      console.log('Timeout inside Promise');
    }, 0);
  });

  setTimeout(() => {
    console.log('Timeout 2');
    Promise.resolve().then(() => {
      console.log('Promise inside Timeout');
    });
  }, 0);

  console.log('End');
}
```

Before running the code, write down your prediction of the output order in comments.

### Task 2: Simulate the Call Stack and Queues

Create a function called `simulateEventLoop` that:

1. Creates three arrays to represent:

   - `callStack`: the call stack (initially empty)
   - `callbackQueue`: the callback (task) queue (initially empty)
   - `microtaskQueue`: the microtask queue (initially empty)

2. Implements a simplified event loop algorithm that:

   - Processes items from the call stack
   - When the call stack is empty, processes all items from the microtask queue
   - When both the call stack and microtask queue are empty, moves one item from the callback queue to the call stack

3. Logs the state of each data structure after each step

4. Demonstrates the event loop with a simple example:
   ```javascript
   function main() {
     console.log('Main script');
     setTimeout(() => console.log('Timeout'), 0);
     Promise.resolve().then(() => console.log('Promise'));
     console.log('End of main script');
   }
   ```

### Task 3: Create Your Own Complex Example

Create a function called `complexExample` that demonstrates a complex interaction between:

1. Nested setTimeout calls
2. Promise chains
3. Synchronous code execution

Make the example interesting and challenging. Add comments to explain the order of execution.

## Example Expected Output for Task 1

```
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
Promise inside Timeout
Timeout inside Promise
```

## Hints

- Remember the order of priority: call stack → microtask queue → callback queue
- Promises and their callbacks go to the microtask queue
- setTimeout callbacks go to the callback queue
- Each time the call stack empties, all microtasks are processed before any tasks from the callback queue
