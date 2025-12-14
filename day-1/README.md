# Day 1: JavaScript Fundamentals

## Quick Reference

### Variables
```javascript
let age = 25;           // can be reassigned
```

### Types
```javascript
let num = 42;           // number
let text = "hello";     // string
let flag = true;        // boolean
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
let a = 1;
let b = 2;

let c = "Alice";
let d = "Bob"

let value_1 = true;
let value_2 = false;

if (a > 2) {
    // code
} else if (c[0] < d[0]) {
    // code
} else if (value_1 && value_2) {
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
while (true) {
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
