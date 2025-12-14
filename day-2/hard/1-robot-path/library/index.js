/*
 * Robot Navigation Library
 *
 * The robot starts at position (0, 0) on a grid.
 * The target is at a specified position.
 * Some cells are blocked (walls).
 */

const fs = require('fs');
const path = require('path');

let position = { x: 0, y: 0 };
let target = { x: 0, y: 0 };
let walls = new Set();
let gridSize = { width: 10, height: 10 };

function init(config, basePath = __dirname) {
    // Load from file if string path provided
    if (typeof config === 'string') {
        const filePath = path.resolve(basePath, config);
        config = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    position = { ...config.start };
    target = { ...config.target };
    walls = new Set(config.walls.map(w => `${w.x},${w.y}`));
    gridSize = { width: config.width, height: config.height };
}

function isBlocked(x, y) {
    if (x < 0 || x >= gridSize.width || y < 0 || y >= gridSize.height) {
        return true;
    }
    return walls.has(`${x},${y}`);
}

function moveUp() {
    const newY = position.y - 1;
    if (isBlocked(position.x, newY)) return false;
    position.y = newY;
    return true;
}

function moveDown() {
    const newY = position.y + 1;
    if (isBlocked(position.x, newY)) return false;
    position.y = newY;
    return true;
}

function moveLeft() {
    const newX = position.x - 1;
    if (isBlocked(newX, position.y)) return false;
    position.x = newX;
    return true;
}

function moveRight() {
    const newX = position.x + 1;
    if (isBlocked(newX, position.y)) return false;
    position.x = newX;
    return true;
}

function getPosition() {
    return { ...position };
}

function getTarget() {
    return { ...target };
}

function isAtTarget() {
    return position.x === target.x && position.y === target.y;
}

module.exports = {
    init,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    getPosition,
    getTarget,
    isAtTarget,
};
