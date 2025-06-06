# JavaScript Notes 

## 1. Introduction to JavaScript

### What is JavaScript?
  JavaScript is a versatile, high-level programming language primarily used to make web pages interactive. It enables dynamic content, such as updating a webpage without reloading, handling user inputs, and creating engaging user experiences. It’s executed by browsers and can also run on servers (e.g., with Node.js).
- A high-level, interpreted programming language.
- Used primarily for adding interactivity to web pages.
- Runs on the client-side (browser) and server-side (e.g., Node.js).

### How it works in the browser
  JavaScript runs in the browser via a JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox), which interprets and executes the code. It interacts with the Document Object Model (DOM), a tree-like representation of a webpage’s structure, allowing manipulation of HTML elements. JavaScript is event-driven, meaning it responds to user actions like clicks or key presses.
- JavaScript is executed by the browser's JavaScript engine (e.g., V8 in Chrome).
- Interacts with the Document Object Model (DOM) to manipulate web content.
- Event-driven: responds to user actions like clicks, key presses, etc.

### Adding JS to HTML: `<script>`
  JavaScript can be included in HTML to make webpages interactive. The `<script>` tag embeds JavaScript code directly or links to an external file. Placing the `<script>` tag at the end of `<body>` ensures the DOM is fully loaded before the script runs, preventing errors when accessing HTML elements.
- Inline: `<script> // JS code here </script>`
- External file: `<script src="script.js"></script>`
- Place `<script>` in `<head>` or at the end of `<body>` to ensure DOM loads first.

## 2. Basic Syntax & Fundamentals

### Variables: `var`, `let`, `const`
  Variables store data for use in a program. JavaScript offers three ways to declare variables: `var` (older, function-scoped), `let` (block-scoped, reassignable), and `const` (block-scoped, non-reassignable). Choosing the right declaration depends on whether the variable’s value or scope needs to change.
- `var`: Function-scoped, can be redeclared and updated (older, less used).
- `let`: Block-scoped, can be updated, not redeclared in same scope.
- `const`: Block-scoped, cannot be updated or redeclared (must be initialized).
```javascript
var x = 10; // Global or function scope
let y = 20; // Block scope
const z = 30; // Block scope, constant
```

### Data Types
  JavaScript is dynamically typed, meaning variables can hold different types of data without explicit declaration. Understanding data types is crucial for performing operations and debugging.
- **String**: Text, e.g., `"Hello"` or `'World'`
- **Number**: Integer or float, e.g., `42`, `3.14`
- **Boolean**: `true` or `false`
- **null**: Represents no value
- **undefined**: Variable declared but not assigned
- **Symbol**: Unique identifier (ES6+), e.g., `Symbol('id')`

### Operators
  Operators perform actions on data, such as calculations or comparisons. Arithmetic operators perform math, comparison operators check equality or order, and logical operators combine conditions for decision-making.
- Arithmetic: `+`, `-`, `*`, `/`, `%` (modulus)
- Comparison: `==` (loose equality), `===` (strict equality), `!=`, `!==`, `>`, `<`
- Logical: `&&` (AND), `||` (OR), `!` (NOT)
```javascript
let a = 5, b = 10;
console.log(a + b); // 15
console.log(a === b); // false
console.log(a < b && b > 0); // true
```

## 3. Control Flow

### `if`, `else if`, `else`
  Control flow statements determine the execution path based on conditions. The `if` statement executes code if a condition is true, `else if` checks additional conditions, and `else` handles all other cases.
```javascript
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
```

### `switch` Statement
  The `switch` statement is an alternative to multiple `if-else` statements, used when comparing a single value against multiple cases. It’s cleaner for scenarios with many fixed values.
```javascript
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

### Ternary Operator
  The ternary operator (`?:`) is a concise way to write simple `if-else` statements. It evaluates a condition and returns one of two values based on whether the condition is true or false.
```javascript
let isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult); // "Adult"
```

## 4. Loops

### `for`, `while`, `do...while`
  Loops execute code repeatedly until a condition is met. `for` loops are ideal for a known number of iterations, `while` loops run as long as a condition is true, and `do...while` ensures at least one execution before checking the condition.
```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while loop
do {
  console.log(i);
  i++;
} while (i < 5);
```

### `break`, `continue`
  `break` exits a loop entirely, while `continue` skips the current iteration and proceeds to the next. They provide control over loop execution for specific conditions.
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Stops at 3
  if (i === 1) continue; // Skips 1
  console.log(i); // 0, 2
}
```

## 5. Functions

### Function Declaration & Expression
  Functions are reusable blocks of code that perform specific tasks. Declarations are named and hoisted, while expressions are assigned to variables and not hoisted. Both allow modular code organization.
```javascript
// Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Expression
const sayHi = function(name) {
  return `Hi, ${name}`;
};
```

### Parameters & Arguments
  Parameters are placeholders in a function definition, while arguments are the actual values passed when calling the function. They allow functions to process dynamic inputs.
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

### Return Statement
  The `return` statement specifies the value a function outputs and stops its execution. If omitted, the function returns `undefined` by default.
```javascript
function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 5)); // 20
```

### Arrow Functions
  Arrow functions (ES6+) provide a concise syntax and inherit `this` from their surrounding context, unlike regular functions. They’re ideal for short, single-expression functions.
```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // 6
```

## 6. Arrays

### Creating Arrays
  Arrays are ordered lists that store multiple values in a single variable. They’re useful for managing collections of data, like lists or sequences.
```javascript
let fruits = ["apple", "banana", "orange"];
```

### Accessing Elements
  Array elements are accessed using zero-based indices. This allows retrieval or modification of specific items in the array.
```javascript
console.log(fruits[0]); // "apple"
```

### Basic Methods
  Array methods simplify common operations like adding or removing elements. These methods make arrays dynamic and flexible for data manipulation.
- `.push()`: Add to end
- `.pop()`: Remove from end
- `.shift()`: Remove from start
- `.unshift()`: Add to start
- `.length`: Get array length
```javascript
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]
fruits.pop(); // ["apple", "banana", "orange"]
fruits.shift(); // ["banana", "orange"]
fruits.unshift("kiwi"); // ["kiwi", "banana", "orange"]
console.log(fruits.length); // 3
```

## 7. Objects

### Creating Objects
  Objects are key-value pairs that store related data and functionality. They represent real-world entities with properties and methods.
```javascript
let person = {
  name: "John",
  age: 30
};
```

### Accessing Properties
  Properties can be accessed using dot notation (simpler) or bracket notation (useful for dynamic keys or invalid identifiers). This flexibility allows versatile data retrieval.
```javascript
console.log(person.name); // "John"
console.log(person["age"]); // 30
```

### Adding, Updating, Deleting Keys
  Objects are mutable, allowing dynamic addition, modification, or removal of properties. This makes them suitable for evolving data structures.
```javascript
person.job = "Developer"; // Add
person.age = 31; // Update
delete person.job; // Delete
```

## 8. DOM Manipulation

### Selecting Elements
  The DOM (Document Object Model) represents a webpage’s structure. JavaScript uses methods like `getElementById` and `querySelector` to select HTML elements for manipulation.
```javascript
let element = document.getElementById("myId");
let elements = document.querySelector(".myClass");
```

### Changing Text/Images/Styles
  JavaScript can dynamically update an element’s content, attributes, or CSS styles, enabling real-time changes to a webpage’s appearance and behavior.
```javascript
element.innerText = "New text";
element.style.color = "blue";
document.querySelector("img").src = "new.jpg";
```

### Adding/Removing Elements
  New elements can be created and added to the DOM, or existing ones removed, allowing dynamic updates to the webpage structure.
```javascript
let div = document.createElement("div");
div.innerText = "New div";
document.body.appendChild(div);
div.remove();
```

### Event Listeners
  Event listeners attach functions to specific events (e.g., clicks), enabling interactive responses to user actions.
```javascript
element.addEventListener("click", () => {
  console.log("Clicked!");
});
```

## 9. Advanced Arrays

### Methods: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.forEach()`
  Advanced array methods enable functional programming, allowing efficient data transformation, filtering, or aggregation without manual loops.
- `.map()`: Creates a new array by applying a function to each element.
- `.filter()`: Creates a new array with elements that pass a test.
- `.reduce()`: Reduces an array to a single value (e.g., sum).
- `.find()`: Returns the first element that satisfies a condition.
- `.forEach()`: Executes a function for each element (no return).
```javascript
let numbers = [1, 2, 3, 4];
numbers.map(n => n * 2); // [2, 4, 6, 8]
numbers.filter(n => n % 2 === 0); // [2, 4]
numbers.reduce((sum, n) => sum + n, 0); // 10
numbers.find(n => n > 2); // 3
numbers.forEach(n => console.log(n)); // 1, 2, 3, 4
```

### Array Destructuring
  Destructuring extracts elements into individual variables, making code concise and readable when working with array data.
```javascript
let [a, b] = [1, 2];
console.log(a, b); // 1, 2
```

## 10. Advanced Objects

### Object Destructuring
  Destructuring extracts object properties into variables, simplifying access to nested or multiple properties in a single line.
```javascript
let { name, age } = person;
console.log(name, age); // "John", 31
```

### Nested Objects
  Objects can contain other objects, allowing complex data structures to represent hierarchical relationships.
```javascript
let user = {
  info: { name: "John", age: 30 }
};
console.log(user.info.name); // "John"
```

### Optional Chaining `?.`
  Optional chaining prevents errors when accessing properties of potentially undefined or null objects, making code safer and cleaner.
```javascript
console.log(user.address?.city); // undefined (no error)
```

## 11. Events & Event Handling

### Event Bubbling vs Capturing
  Events propagate through the DOM in two phases: **capturing** (from parent to target) and **bubbling** (from target to parent). Bubbling is the default, but capturing can be enabled for specific use cases.
- **Bubbling**: Event propagates from target to parent elements (default).
- **Capturing**: Event propagates from parent to target (use `{ capture: true }`).

### `addEventListener`
  `addEventListener` attaches a function to an event, allowing multiple listeners for the same event without overwriting previous ones.
```javascript
element.addEventListener("click", (e) => {
  console.log(e.target);
});
```

### Event Object
  The event object provides details about an event (e.g., target element, user input). Methods like `e.preventDefault()` can control default browser behavior, such as form submissions.
```javascript
element.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  console.log(e.target); // Form element
});
```

## 12. Scope & Hoisting

### Global vs Local Scope
  Scope determines where variables are accessible. Global variables are available everywhere, while local variables are restricted to functions or blocks, reducing naming conflicts.
- **Global**: Accessible everywhere.
- **Local**: Inside function/block.
```javascript
let globalVar = "I'm global";
function test() {
  let localVar = "I'm local";
}
```

### Function Scope
  Variables declared with `var` are scoped to the enclosing function, meaning they’re not accessible outside it, unlike block-scoped `let` and `const`.
```javascript
function myFunc() {
  var x = 10;
}
console.log(x); // ReferenceError
```

### Block Scope with `let` & `const`
  `let` and `const` limit variables to the block (e.g., `{}`) they’re declared in, improving code safety and readability.
```javascript
if (true) {
  let x = 10;
}
console.log(x); // ReferenceError
```

### Hoisting
  Hoisting moves `var` declarations and function declarations to the top of their scope during compilation, allowing use before declaration (though `var` initializes to `undefined`).
```javascript
console.log(x); // undefined
var x = 5;

sayHi(); // Works
function sayHi() {
  console.log("Hi");
}
```

## 14. Callback Functions

### Passing Functions as Arguments
  Functions can be passed as arguments to other functions, enabling dynamic behavior and reusable code patterns, often used in event handling or asynchronous operations.
```javascript
function callbackExample(callback) {
  callback();
}
callbackExample(() => console.log("Callback executed"));
```

### Nested Callbacks
  Nested callbacks occur when functions are passed as callbacks within other callbacks, often used in asynchronous operations but can lead to complex, hard-to-read code ("callback hell").
```javascript
setTimeout(() => {
  console.log("First");
  setTimeout(() => console.log("Second"), 1000);
}, 1000);
```

## 15. Asynchronous JavaScript

### `setTimeout()`, `setInterval()`
  These functions handle asynchronous tasks by delaying (`setTimeout`) or repeating (`setInterval`) code execution, allowing non-blocking operations in JavaScript’s single-threaded environment.
```javascript
setTimeout(() => console.log("Delayed"), 1000);
setInterval(() => console.log("Every second"), 1000);
```

### Promises
  Promises represent the eventual completion (or failure) of an asynchronous operation, providing a cleaner way to handle async results compared to callbacks.
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
```

### `.then()`, `.catch()`
  `.then()` handles successful promise resolution, while `.catch()` handles errors, enabling structured asynchronous code flow.
```javascript
promise
  .then(result => console.log(result)) // "Done"
  .catch(error => console.log(error));
```

### `async/await`
  `async/await` is syntactic sugar for promises, making asynchronous code look synchronous, improving readability and error handling with try-catch blocks.
```javascript
async function fetchData() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
```

## 16. Error Handling

### `try`, `catch`, `finally`
  Error handling ensures robust programs by catching and managing errors. `try` tests code, `catch` handles errors, and `finally` runs regardless of the outcome.
```javascript
try {
  throw new Error("Something went wrong");
} catch (error Tageszusammenfassung) {
  console.log(error.message);
} finally {
  console.log("Always runs");
}
```

### Throwing Custom Errors
  Custom errors can be thrown to signal specific issues, allowing developers to handle exceptional cases explicitly.
```javascript
throw new Error("Custom error");
```

## 17. ES6+ Features

### Template Literals
  Template literals use backticks (`` ` ``) for multi-line strings and embedded expressions, making string manipulation more readable and flexible.
```javascript
let name = "John";
console.log(`Hello, ${name}!`); // "Hello, John!"
```

### Spread/Rest Operator `...`
  The spread operator expands arrays or objects, while the rest operator collects multiple arguments into an array, simplifying array/object manipulation and function parameters.
```javascript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### Destructuring
  Covered in Arrays and Objects sections; destructuring simplifies extracting values from arrays or objects into variables.

### Default Parameters
  Default parameters provide fallback values for function arguments, reducing the need for manual checks and improving code clarity.
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### `let`, `const`, Arrow Functions
  Covered earlier; `let` and `const` improve scoping, while arrow functions offer concise syntax and lexical `this`.

### Modules: `import`, `export`
  Modules allow code to be split into reusable files, promoting modularity and maintainability. `export` shares code, and `import` uses it.
```javascript
// module.js
export const add = (a, b) => a + b;

// main.js
import { add } from './module.js';
console.log(add(2, 3)); // 5
```

## 18. JavaScript Classes

### `class`, `constructor`, `extends`
  Classes provide a blueprint for creating objects with shared properties and methods. The `constructor` initializes instances, and `extends` enables inheritance for code reuse.
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
```

### Encapsulation Using Private Fields
  Private fields (using `#`) restrict access to certain properties, enforcing encapsulation and protecting data from external modification.
```javascript
class Person {
  #privateField = "secret";
  getSecret() {
    return this.#privateField;
  }
}
```

## 19. The `this` Keyword

### Behavior in Different Contexts
  The `this` keyword refers to the context in which a function is called. Its value depends on where and how the function is invoked, which can be tricky in different scenarios.
- **Global Scope**: `this` refers to `window` (browser).
- **Object Methods**: `this` refers to the object.
- **Arrow Functions**: `this` retains the value of the enclosing lexical context.
- **Event Handlers**: `this` refers to the element that triggered the event.
```javascript
let obj = {
  name: "John",
  sayName() {
    console.log(this.name);
  }
};
obj.sayName(); // "John"
```

### `.call()`, `.apply()`, `.bind()`
  These methods control the value of `this` in a function. `.call()` and `.apply()` invoke the function immediately with a specified `this`, while `.bind()` creates a new function with a fixed `this`.
```javascript
function sayHello() {
  console.log(this.name);
}
let person = { name: "John" };
sayHello.call(person); // "John"
sayHello.apply(person); // "John"
let bound = sayHello.bind(person);
bound(); // "John"
```
