import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Fibonacci Generator', () => {
    it('returns empty array for n=0', () => {
        expect(main(0)).toEqual([]);
    });

    it('returns [0] for n=1', () => {
        expect(main(1)).toEqual([0]);
    });

    it('returns [0, 1] for n=2', () => {
        expect(main(2)).toEqual([0, 1]);
    });

    it('returns first 5 fibonacci numbers', () => {
        expect(main(5)).toEqual([0, 1, 1, 2, 3]);
    });

    it('returns first 8 fibonacci numbers', () => {
        expect(main(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    it('returns first 10 fibonacci numbers', () => {
        expect(main(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
