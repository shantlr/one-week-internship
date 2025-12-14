import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Array Sum', () => {
    it('sums positive numbers', () => {
        expect(main([1, 2, 3, 4, 5])).toBe(15);
    });

    it('handles mixed positive and negative', () => {
        expect(main([10, -5, 3])).toBe(8);
        expect(main([-1, -2, -3])).toBe(-6);
    });

    it('returns 0 for empty array', () => {
        expect(main([])).toBe(0);
    });

    it('handles single element', () => {
        expect(main([42])).toBe(42);
    });

    it('handles large arrays', () => {
        expect(main([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(10);
    });
});
