/*
 * Exercise 1: Robot Path
 *
 * Navigate a robot from start to target on a grid.
 *
 * Run: ./run.sh examples/simple.json
 *
 * Available functions (imported from library):
 * - moveUp()      → moves robot up, returns false if blocked
 * - moveDown()    → moves robot down, returns false if blocked
 * - moveLeft()    → moves robot left, returns false if blocked
 * - moveRight()   → moves robot right, returns false if blocked
 * - getPosition() → returns { x, y } current position
 * - getTarget()   → returns { x, y } target position
 * - isAtTarget()  → returns true if robot reached target
 *
 * Grid coordinates:
 * - (0,0) is top-left
 * - x increases going right
 * - y increases going down
 *
 * Return an array of moves: ['up', 'right', 'right', 'down', ...]
 * Return empty array if already at target.
 * Return null if target is unreachable.
 *
 * Example grid (5x5):
 *   0 1 2 3 4
 * 0 S . . . .
 * 1 . # # . .
 * 2 . . . . .
 * 3 . # . # .
 * 4 . . . . T
 *
 * S = start (0,0), T = target (4,4), # = wall
 * 
 * Hint: Write a debug function to display the grid and robot position.
 */

const { init, moveUp, moveDown, moveLeft, moveRight, getPosition, getTarget, isAtTarget } = require('./library');

function main(config) {
    // Initialize the grid (config can be object or file path)
    init(config, __dirname);

    // Your code here
    // Use the provided functions to navigate the robot
    // Return the array of moves taken
}

module.exports = { main };
