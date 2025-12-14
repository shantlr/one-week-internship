import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Find Max', () => {
    it('finds max in positive numbers', () => {
        expect(main([1, 5, 3, 9, 2])).toBe(9);
    });

    it('finds max in negative numbers', () => {
        expect(main([-10, -5, -20])).toBe(-5);
    });

    it('handles single element', () => {
        expect(main([42])).toBe(42);
    });

    it('handles duplicate max values', () => {
        expect(main([3, 3, 3])).toBe(3);
        expect(main([1, 5, 5, 2])).toBe(5);
    });

    it('finds max at different positions', () => {
        expect(main([9, 1, 2, 3])).toBe(9);  // first
        expect(main([1, 2, 3, 9])).toBe(9);  // last
        expect(main([1, 9, 2, 3])).toBe(9);  // middle
    });
});
