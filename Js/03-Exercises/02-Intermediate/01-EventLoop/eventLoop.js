/**
 * Event Loop Exercise
 *
 * This exercise helps you understand JavaScript's execution model:
 * - Call Stack
 * - Web APIs
 * - Callback Queue
 * - Microtask Queue
 * - Event Loop
 */

// ===== Task 1: Predict the Output =====

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

// Write your prediction here before running the code:
/*
 * Expected order of execution:
 * 1.
 * 2.
 * 3.
 * 4.
 * 5.
 * 6.
 * 7.
 * 8.
 */

// ===== Task 2: Simulate the Call Stack and Queues =====

function simulateEventLoop() {
  // Create data structures to represent the call stack and queues
  const callStack = [];
  const callbackQueue = [];
  const microtaskQueue = [];

  // Example to simulate:
  function main() {
    console.log('Main script');
    setTimeout(() => console.log('Timeout'), 0);
    Promise.resolve().then(() => console.log('Promise'));
    console.log('End of main script');
  }

  // Your simulation code here
  // This should show the state of each queue as the code executes
}

// ===== Task 3: Create Your Own Complex Example =====

function complexExample() {
  // Create a complex example with nested setTimeout calls,
  // Promise chains, and synchronous code
  // Explain the execution order in comments
}

// Uncomment the function you want to run:
// predictOutput();
// simulateEventLoop();
// complexExample();
