#!/bin/bash

# Usage: ./run.sh [json-file]
# Example: ./run.sh examples/easy.json

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ -z "$1" ]; then
    # Run with default config
    node -e "
const { main } = require('$SCRIPT_DIR/index.js');
const result = main();
console.log('Result:', result ? 'Victory!' : 'Defeat...');
"
else
    node -e "
const fs = require('fs');
const path = require('path');
const { main } = require('$SCRIPT_DIR/index.js');

const filePath = path.resolve('$SCRIPT_DIR', '$1');
const config = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log('Player Health:', config.playerHealth);
console.log('Player Energy:', config.playerEnergy);
console.log('Enemy Health:', config.enemyHealth);
console.log('Enemy Pattern:', JSON.stringify(config.enemyPattern));
console.log();

const result = main(config);
console.log('Result:', result ? 'Victory!' : 'Defeat...');
"
fi
