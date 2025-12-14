import { describe, it, expect } from 'vitest';
import { main } from './index.js';
import { isAtTarget } from './library/index.js';

describe('Robot Path', () => {
    it('navigates simple path (no walls)', () => {
        const moves = main({
            start: { x: 0, y: 0 },
            target: { x: 2, y: 2 },
            walls: [],
            width: 5,
            height: 5
        });

        expect(isAtTarget()).toBe(true);
        expect(Array.isArray(moves)).toBe(true);
    });

    it('navigates around walls', () => {
        const moves = main({
            start: { x: 0, y: 0 },
            target: { x: 2, y: 0 },
            walls: [{ x: 1, y: 0 }],
            width: 5,
            height: 5
        });

        expect(isAtTarget()).toBe(true);
        expect(moves.length).toBeGreaterThan(2); // must go around
    });

    it('returns empty array if already at target', () => {
        const moves = main({
            start: { x: 2, y: 2 },
            target: { x: 2, y: 2 },
            walls: [],
            width: 5,
            height: 5
        });

        expect(moves).toEqual([]);
        expect(isAtTarget()).toBe(true);
    });

    it('handles complex maze', () => {
        const moves = main({
            start: { x: 0, y: 0 },
            target: { x: 4, y: 4 },
            walls: [
                { x: 1, y: 1 }, { x: 2, y: 1 },
                { x: 1, y: 3 }, { x: 3, y: 3 }
            ],
            width: 5,
            height: 5
        });

        expect(isAtTarget()).toBe(true);
    });

    it('returns null for unreachable target', () => {
        const moves = main({
            start: { x: 0, y: 0 },
            target: { x: 2, y: 0 },
            walls: [
                { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 },
                { x: 0, y: 1 }
            ],
            width: 3,
            height: 3
        });

        expect(moves).toBe(null);
    });

    it('loads config from file path', () => {
        const moves = main('./examples/simple.json');
        expect(isAtTarget()).toBe(true);
        expect(Array.isArray(moves)).toBe(true);
    });
});
