# JavaScript Engines

JavaScript engines are programs that execute JavaScript code. Different browsers use different engines:

- **V8**: Used by Google Chrome and Node.js
- **SpiderMonkey**: Used by Firefox
- **JavaScriptCore**: Used by Safari
- **Chakra**: Used by older versions of Microsoft Edge

## How JavaScript Engines Work (Simplified)

Imagine a JavaScript engine as a _factory_ that takes your written code (like a recipe), understands it, and turns it into actions your computer can perform. This process involves several steps and specialized workers (components).

### Core Components Explained with Examples

- **Parser**  
  The parser reads your JavaScript code and breaks it down into an _Abstract Syntax Tree (AST)_, which is like a blueprint showing the structure of your code.  
  _Example_:

  ```js
  let x = 5 + 2;
  ```

  The parser sees this as:

  - Declare variable `x`
  - Assign it the result of `5 + 2`

- **Interpreter**  
  The interpreter quickly turns the AST into _bytecode_, which is a simpler, faster-to-execute version of your code.  
  _Example_:  
  The code above becomes instructions like:

  - Add 5 and 2
  - Store result in `x`

- **Profiler**  
  The profiler watches your code as it runs, noting which parts are used most often (called "hot paths").  
  _Example_:  
  If you have a loop that runs a thousand times, the profiler marks this as a hot path.

- **Just-In-Time (JIT) Compiler**  
  The JIT compiler takes hot paths and turns them into _machine code_—the language your computer's processor understands directly. This makes repeated code run much faster.  
  _Example_:  
  If your code sorts a list many times, the JIT compiler will optimize the sorting function for speed.

- **Garbage Collector**  
  The garbage collector automatically cleans up variables and objects you no longer need, freeing up memory.  
  _Example_:  
  If you create an object inside a function and never use it again, the garbage collector deletes it from memory.

## JavaScript follows these main internal phases:

JavaScript execution involves several steps:

1. **Compilation Phase (a.k.a. Creation Phase / Parsing Phase)**: The engine parses the code into an Abstract Syntax Tree (AST)

JavaScript is not interpreted line-by-line anymore — it's Just-In-Time (JIT) compiled.
In this phase:

- JS code is parsed into an Abstract Syntax Tree (AST).
- Variables and function declarations are stored in memory (hoisting).
- The scope chain is established.
- No actual execution happens yet.

📌 Key things that happen:

- Functions are fully hoisted (available entirely).
- var is hoisted and initialized with undefined.
- let and const are hoisted but remain in Temporal Dead Zone (TDZ).

```javascript
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError
let y = 20;
```

2. **Memory Allocation Phase(creation phase)**: Technically part of the compilation phase but worth separating mentally.

In this step:

- JS engine allocates memory for all variables and functions.
- Memory is reserved in the heap or stack, depending on the type.

🧠 Heap vs. Stack:

- Stack: Primitive values (numbers, booleans, etc.)
- Heap: Complex values (objects, arrays, functions)

3. **Execution Phase (a.k.a. Runtime Phase)**: The AST is compiled into machine code and executed

Now the code is actually run, line by line:

- JS assigns values to variables.
- Functions are invoked.
- The call stack is used to track what's executing.
- Closures are formed if needed.
- The event loop, Web APIs, and queues start playing a role for async code.

```javascript
function greet() {
  console.log('Hello');
}
greet(); // Execution happens here
```

This is also where:

- Errors can be thrown
- Promises are resolved/rejected
- Async code gets deferred to queues
- Scope resolution and closures take effect

## Step-by-Step Code Execution (With Example)

Let's see what happens when you run this code:

```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Alice');
```

**Step 1: Parsing**  
The parser reads the code and builds an AST:

- Function `greet` with a parameter `name`
- Inside, call `console.log` with a message

**Step 2: Interpretation**  
The interpreter turns the AST into bytecode instructions:

- Store the function
- When called, combine "Hello, " with the given name and "!"
- Print the result

**Step 3: Profiling**  
If `greet` is called many times, the profiler marks it as a hot path.

**Step 4: JIT Compilation**  
The JIT compiler translates the hot path into machine code for even faster execution.

**Step 5: Execution & Optimization**  
The engine runs the optimized machine code. If your code changes in a way that breaks the JIT's assumptions, it can "de-optimize" and fall back to a slower path.

## Visual Metaphor

Think of the engine as a kitchen:

- **Parser**: Reads the recipe and writes a step-by-step plan (AST).
- **Interpreter**: Quickly cooks a basic version (bytecode).
- **Profiler**: Watches which steps you repeat a lot.
- **JIT Compiler**: Prepares special tools for the steps you do most, making them faster (machine code).
- **Garbage Collector**: Cleans up the kitchen, throwing away unused ingredients.

**🔄 Full Lifecycle Flow**

| Phase       | What Happens                                    |
| ----------- | ----------------------------------------------- |
| Compilation | x is hoisted (undefined), sayHi() is hoisted    |
| Memory      | Memory allocated for x, function object created |
| Execution   | x = 10 assigned, sayHi() called and logged      |

**🔥 Bonus: Hidden Phases You Don't See**

- Garbage Collection: Cleans up memory when variables go out of scope.
- Optimization: JIT compiler (in V8) optimizes hot functions during runtime.
- Inline Caching: Speeds up repeated property access on objects.
- Hidden Classes: Internally organizes objects for faster property lookup.
- Speculative Optimization: Makes guesses to speed things up, but can undo them if they're wrong.
