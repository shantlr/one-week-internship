#!/bin/bash

# Usage: ./run.sh <json-file>
# Example: ./run.sh examples/easy.json

if [ -z "$1" ]; then
    echo "Usage: ./run.sh <json-file>"
    echo "Example: ./run.sh examples/easy.json"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

node -e "
const fs = require('fs');
const path = require('path');
const { main } = require('$SCRIPT_DIR/index.js');

const filePath = path.resolve('$SCRIPT_DIR', '$1');
const board = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log('Input:');
board.forEach(row => console.log(row.map(n => n === 0 ? '.' : n).join(' ')));
console.log();

const result = main(board);

if (result) {
    console.log('Solution:');
    result.forEach(row => console.log(row.join(' ')));
} else {
    console.log('No solution found!');
}
"
