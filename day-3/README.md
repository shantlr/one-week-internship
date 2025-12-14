# Day 3: DOM & Game Basics

## Quick Reference

### HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="title">Hello</h1>
    <button class="btn">Click me</button>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Basics
```css
/* Select by tag */
h1 { color: blue; }

/* Select by class */
.btn { background: green; }

/* Select by id */
#title { font-size: 24px; }

/* Common properties */
width: 100px;
height: 50px;
margin: 10px;
padding: 5px;
display: none;        /* hide element */
display: block;       /* show element */
```

### DOM Selection
```javascript
document.getElementById('title');
document.querySelector('.btn');        // first match
document.querySelectorAll('.btn');     // all matches
```

### DOM Manipulation
```javascript
element.textContent = 'New text';
element.innerHTML = '<strong>Bold</strong>';
element.style.color = 'red';
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');

// Attributes: extra info on HTML tags
// <a href="url" id="link" data-count="5">
//    ^^^^        ^^       ^^^^^^^^^^^ attributes
element.getAttribute('href');
element.getAttribute('data-count');
element.setAttribute('href', 'https://example.com');
```

### Events
```javascript
element.addEventListener('click', function() {
    console.log('Clicked!');
});

// Common events: click, keydown, keyup, input, submit, mouseover
```

### Timers
```javascript
// Run once after delay
setTimeout(() => {
    console.log('After 1 second');
}, 1000);

// Run repeatedly
const interval = setInterval(() => {
    console.log('Every second');
}, 1000);

clearInterval(interval);  // stop it
```

### Creating Elements
```javascript
// 1. Create the element
const div = document.createElement('div');

// 2. Configure it
div.textContent = 'New element';
div.classList.add('my-class');

// 3. Add it to the page
document.body.appendChild(div);       // at end of body
parent.appendChild(child);            // at end of parent
parent.insertBefore(child, sibling);  // before another element

// Remove element
element.remove();
```

## Run Your Code
```bash
open index.html   # opens in default browser (Mac)
```
Use browser DevTools (F12) to debug.
