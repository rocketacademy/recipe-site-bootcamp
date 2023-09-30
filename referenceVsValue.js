// Reference vs Value
let a = 10;
let b = "Hi";
let c = [1, 2];

let d = c;
d.push(3); // This changes c too as they point to the same memory address

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);

// Comparing by reference
console.log(c === d); // True
console.log(c == d); // True

// Comparing by value
let e = [1, 2];
console.log(c === e); // False as it points to a different memory location than c
console.log(c == e); // False too

function add(array, element) {
  array.push(element);
}

add(c, 4);
console.log(c); // Now returns [1, 2, 3, 4] as the memory address of c is passed into the add function, NOT the value of c

// Summary
/** Immutable Data Types: Boolean, Number, String
 * Immutable data types are passed by value. To make a copy, we would assign the old variable to a new one, and any changes to either variable would not affect the other
 * let a = 3
 * let b = a
 * b = 4
 */

/** Mutable Data Types: Array, Object, Function
 * Mutable data types are passed by reference. To make a copy, we would use the Javascript spread operator or a loop, NOT direct assignment to a new variable.
 * Mutable data types are referenced by memory addresses because we do not know how large these data structures will get
 * var array1 = [1, 2] will be initialised at memory address 0x1 for example, NOT the actual value
 * var array2 = [...array1] will be initialised at a new memory address 0x2 for example, since we use the spread operator to create a shallow copy of array1
 */

///////////////////
// Javascript Runtime Environment

/** What is a Runtime Environment?
 * A runtime environment is where your program will be executed  
 * determines what global objects your program can access and it can also impact how it runs
 * 2 types of Javascript Environment: 
 1. runtime environment of a browser (e.g., Chrome, Firefox)
 2. Node runtime environment
 */

// A Browser's Runtime Environment (designed for client-side web development and interact with the DOM)
/**
 * Context: When JavaScript code runs in a web browser, it operates within the context of the browser itself. This context includes the Document Object Model (DOM) and the Browser Object Model (BOM).
 
 * DOM Interaction: JavaScript in the browser can manipulate the DOM to dynamically update and modify web pages. This allows for tasks like adding or removing elements, handling user interactions (e.g., clicks and input), and changing the appearance of a webpage.

 * Examples: Websites and web applications like Google, Facebook, and Twitter use JavaScript in a browser environment to create interactive user interfaces and manage client-side functionality.

 * Limitations: Browser-based JavaScript has limitations due to security concerns, such as the same-origin policy, which restricts communication between web pages from different domains.
 */

// A Node.js Runtime Environment (designed for server-side development and provides access to various server-side capabilities)
/**
 * Context: Node.js is a server-side runtime environment for JavaScript. It allows JavaScript to run on the server rather than in a browser. Node.js has its own runtime environment, which is different from the browser.
 
 * Access to the File System: Node.js provides APIs to interact with the file system, allowing you to read and write files, create servers, and perform I/O operations.
 * No DOM: Unlike in the browser, Node.js does not have access to the DOM or the BOM, which means it cannot directly manipulate web pages. It focuses on server-side tasks and provides modules for handling networking, file operations, and more.
 
 * Examples: Server-side applications like web servers, REST APIs, and real-time applications (e.g., chat servers) are often built using Node.js. Popular frameworks like Express.js are used to create web applications with Node.js.

 * No Browser-Specific Features: Node.js does not support browser-specific features like window or document objects. Code that relies on these browser-specific features will not work in Node.js.
 */
