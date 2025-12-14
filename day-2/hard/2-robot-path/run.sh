#!/bin/bash

# Usage: ./run.sh <json-file>
# Example: ./run.sh examples/simple.json

if [ -z "$1" ]; then
    echo "Usage: ./run.sh <json-file>"
    echo "Example: ./run.sh examples/simple.json"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

node -e "
const fs = require('fs');
const path = require('path');
const { main } = require('$SCRIPT_DIR/index.js');

const filePath = path.resolve('$SCRIPT_DIR', '$1');
const config = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log('Grid:', config.width + 'x' + config.height);
console.log('Start:', JSON.stringify(config.start));
console.log('Target:', JSON.stringify(config.target));
console.log('Walls:', config.walls.length);
console.log();

const result = main(config);
console.log('Moves:', result ? JSON.stringify(result) : 'null (unreachable)');
"
