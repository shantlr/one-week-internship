# Day 1: JavaScript Fundamentals

## Quick Reference

### Variables
```javascript
let age = 25;           // can be reassigned
const name = "Alice";   // cannot be reassigned
var old = "avoid";      // old style, avoid using
```

### Types
```javascript
let num = 42;           // number
let text = "hello";     // string
let flag = true;        // boolean
let empty = null;       // null
let notSet;             // undefined
```

### Operators
```javascript
// Arithmetic
+ - * / %               // add, subtract, multiply, divide, modulo

// Comparison
== != < > <= >=         // loose comparison
=== !==                 // strict comparison (use these)

// Logical
&& || !                 // and, or, not
```

### Conditionals
```javascript
if (condition) {
    // code
} else if (other) {
    // code
} else {
    // code
}
```

### Loops
```javascript
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while loop
while (condition) {
    // code
}
```

### Strings
```javascript
let str = "hello";
str.length;             // 5
str[0];                 // "h"
str.toUpperCase();      // "HELLO"
str.toLowerCase();      // "hello"
str.includes("ell");    // true
```

### Console
```javascript
console.log("Hello");   // print output
```

## Run Your Code
```bash
node index.js
```
