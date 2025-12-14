#!/bin/bash

# Usage: ./run.sh <exercise-path> [args...]
# Example: ./run.sh easy/exercise-1 15
#          ./run.sh medium/exercise-2 "hello world"

if [ -z "$1" ]; then
    echo "Usage: ./run.sh <exercise-path> [args...]"
    echo "Example: ./run.sh easy/exercise-1 15"
    exit 1
fi

EXERCISE_PATH="$1"
shift

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
INDEX_FILE="$SCRIPT_DIR/$EXERCISE_PATH/index.js"

if [ ! -f "$INDEX_FILE" ]; then
    echo "Error: Exercise not found at $EXERCISE_PATH"
    exit 1
fi

# Convert arguments to JSON array for node
ARGS_JSON=$(printf '%s\n' "$@" | node -e "
const lines = require('fs').readFileSync(0, 'utf8').trim().split('\n').filter(Boolean);
const args = lines.map(arg => {
    const num = Number(arg);
    return isNaN(num) ? arg : num;
});
console.log(JSON.stringify(args));
")

node -e "
const { main } = require('$INDEX_FILE');
const args = $ARGS_JSON;
console.log('ARGS:', args)
const result = main(...args);
console.log(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
"
