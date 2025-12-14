/*
 * Todo List
 *
 * Build the HTML/CSS and implement the todo list:
 *
 * 1. Create the UI:
 *    - Input form to add todos
 *    - List to display todos
 *    - Filter buttons (All / Active / Completed)
 *    - Item count display
 *    - Clear completed button
 *
 * 2. Data structure:
 *    - Array of todo objects: { id, text, completed }
 *    - Load from localStorage on start
 *    - Save to localStorage on every change
 *
 * 3. Add todo:
 *    - On form submit
 *    - Create todo object
 *    - Add to array
 *    - Render list
 *
 * 4. Toggle complete:
 *    - Checkbox click toggles completed state
 *    - Update todo in array
 *    - Re-render
 *
 * 5. Delete todo:
 *    - Remove from array
 *    - Re-render
 *
 * 6. Filters:
 *    - 'all': show all todos
 *    - 'active': show only !completed
 *    - 'completed': show only completed
 *
 * 7. Footer:
 *    - Show count of active items
 *    - Clear completed button
 *
 * localStorage:
 * - localStorage.setItem('todos', JSON.stringify(todos))
 * - JSON.parse(localStorage.getItem('todos')) || []
 */

// Your code here
