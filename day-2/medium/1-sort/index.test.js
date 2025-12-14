import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Sort', () => {
    it('sorts unsorted array', () => {
        expect(main([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
    });

    it('handles duplicates', () => {
        expect(main([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    });

    it('handles already sorted', () => {
        expect(main([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles reverse sorted', () => {
        expect(main([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles single element', () => {
        expect(main([1])).toEqual([1]);
    });

    it('handles empty array', () => {
        expect(main([])).toEqual([]);
    });

    it('handles two elements', () => {
        expect(main([2, 1])).toEqual([1, 2]);
    });

    it('handles negative numbers', () => {
        expect(main([3, -1, 2, -5])).toEqual([-5, -1, 2, 3]);
    });
});
