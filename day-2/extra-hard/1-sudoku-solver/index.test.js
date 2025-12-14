import { describe, it, expect } from 'vitest';
import { main } from './index.js';

function isValidSudoku(board) {
    // Check rows
    for (let row = 0; row < 9; row++) {
        const seen = new Set();
        for (let col = 0; col < 9; col++) {
            const val = board[row][col];
            if (val < 1 || val > 9 || seen.has(val)) return false;
            seen.add(val);
        }
    }
    // Check columns
    for (let col = 0; col < 9; col++) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const val = board[row][col];
            if (seen.has(val)) return false;
            seen.add(val);
        }
    }
    // Check 3x3 boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const val = board[boxRow * 3 + i][boxCol * 3 + j];
                    if (seen.has(val)) return false;
                    seen.add(val);
                }
            }
        }
    }
    return true;
}

describe('Sudoku Solver', () => {
    it('solves easy puzzle', () => {
        const board = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ];

        const result = main(board);
        expect(result).not.toBe(null);
        expect(isValidSudoku(result)).toBe(true);
    });

    it('solves medium puzzle', () => {
        const board = [
            [0,0,0,6,0,0,4,0,0],
            [7,0,0,0,0,3,6,0,0],
            [0,0,0,0,9,1,0,8,0],
            [0,0,0,0,0,0,0,0,0],
            [0,5,0,1,8,0,0,0,3],
            [0,0,0,3,0,6,0,4,5],
            [0,4,0,2,0,0,0,6,0],
            [9,0,3,0,0,0,0,0,0],
            [0,2,0,0,0,0,1,0,0]
        ];

        const result = main(board);
        expect(result).not.toBe(null);
        expect(isValidSudoku(result)).toBe(true);
    });

    it('solves hard puzzle', () => {
        const board = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,3,0,8,5],
            [0,0,1,0,2,0,0,0,0],
            [0,0,0,5,0,7,0,0,0],
            [0,0,4,0,0,0,1,0,0],
            [0,9,0,0,0,0,0,0,0],
            [5,0,0,0,0,0,0,7,3],
            [0,0,2,0,1,0,0,0,0],
            [0,0,0,0,4,0,0,0,9]
        ];

        const result = main(board);
        expect(result).not.toBe(null);
        expect(isValidSudoku(result)).toBe(true);
    });

    it('returns null for unsolvable puzzle', () => {
        const board = [
            [5,3,0,0,7,0,0,0,0],
            [5,0,0,1,9,5,0,0,0],  // duplicate 5 in column
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ];

        const result = main(board);
        expect(result).toBe(null);
    });

    it('handles already solved puzzle', () => {
        const board = [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
        ];

        const result = main(board);
        expect(result).not.toBe(null);
        expect(isValidSudoku(result)).toBe(true);
    });
});
