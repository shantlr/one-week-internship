import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Reverse Array', () => {
    it('reverses number array', () => {
        expect(main([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    it('reverses string array', () => {
        expect(main(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });

    it('handles single element', () => {
        expect(main([1])).toEqual([1]);
    });

    it('handles empty array', () => {
        expect(main([])).toEqual([]);
    });

    it('handles even length array', () => {
        expect(main([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    it('handles odd length array', () => {
        expect(main([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
