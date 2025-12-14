#!/bin/bash

# Usage: ./run.sh <json-file>
# Example: ./run.sh examples/valid.json

if [ -z "$1" ]; then
    echo "Usage: ./run.sh <json-file>"
    echo "Example: ./run.sh examples/valid.json"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

node -e "
const fs = require('fs');
const path = require('path');
const { main } = require('$SCRIPT_DIR/index.js');

const filePath = path.resolve('$SCRIPT_DIR', '$1');
const board = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log('Board:');
board.forEach(row => console.log(row.map(n => n === 0 ? '.' : n).join(' ')));
console.log();

const result = main(board);
console.log('Valid:', result);
"
