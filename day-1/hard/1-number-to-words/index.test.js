import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Number to Words', () => {
    it('handles zero', () => {
        expect(main(0)).toBe('zero');
    });

    it('handles single digits', () => {
        expect(main(1)).toBe('one');
        expect(main(5)).toBe('five');
        expect(main(9)).toBe('nine');
    });

    it('handles teens', () => {
        expect(main(10)).toBe('ten');
        expect(main(11)).toBe('eleven');
        expect(main(12)).toBe('twelve');
        expect(main(15)).toBe('fifteen');
        expect(main(19)).toBe('nineteen');
    });

    it('handles tens', () => {
        expect(main(20)).toBe('twenty');
        expect(main(21)).toBe('twenty-one');
        expect(main(42)).toBe('forty-two');
        expect(main(99)).toBe('ninety-nine');
    });

    it('handles hundreds', () => {
        expect(main(100)).toBe('one hundred');
        expect(main(123)).toBe('one hundred twenty-three');
        expect(main(500)).toBe('five hundred');
        expect(main(999)).toBe('nine hundred ninety-nine');
    });

    it('handles thousands', () => {
        expect(main(1000)).toBe('one thousand');
        expect(main(1234)).toBe('one thousand two hundred thirty-four');
        expect(main(10000)).toBe('ten thousand');
        expect(main(99999)).toBe('ninety-nine thousand nine hundred ninety-nine');
    });

    it('handles millions', () => {
        expect(main(1000000)).toBe('one million');
        expect(main(1000001)).toBe('one million one');
    });
});
