# Day 2: Functions & Arrays

## Quick Reference

### Functions
```javascript
// Declaration
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Default parameters
function greet(name = "World") {
    return "Hello " + name;
}
```

### Arrays
```javascript
let arr = [1, 2, 3, 4, 5];

arr.length;              // 5
arr[0];                  // 1 (first element)
arr[arr.length - 1];     // 5 (last element)
arr.push(6);             // add to end
arr.pop();               // remove from end
arr.shift();             // remove from start
arr.unshift(0);          // add to start
```

### Array Iteration
```javascript
// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### 2D Arrays
```javascript
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

grid[0][0];    // 1 (row 0, col 0)
grid[1][2];    // 6 (row 1, col 2)
grid.length;   // 3 (number of rows)
grid[0].length; // 3 (number of columns)
```

### Objects
```javascript
let obj = { a: 1, b: 2 };

obj.a;                   // 1
obj['b'];                // 2
obj.c = 3;               // add property
Object.keys(obj);        // ['a', 'b', 'c']
Object.values(obj);      // [1, 2, 3]
```

## Run Your Code
```bash
./run.sh easy/1-array-sum 1 2 3 4 5
yarn test
```
