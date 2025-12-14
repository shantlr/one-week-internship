import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Grade Calculator', () => {
    it('returns A for scores 90-100', () => {
        expect(main(90)).toBe('A');
        expect(main(95)).toBe('A');
        expect(main(100)).toBe('A');
    });

    it('returns B for scores 80-89', () => {
        expect(main(80)).toBe('B');
        expect(main(82)).toBe('B');
        expect(main(89)).toBe('B');
    });

    it('returns C for scores 70-79', () => {
        expect(main(70)).toBe('C');
        expect(main(73)).toBe('C');
        expect(main(79)).toBe('C');
    });

    it('returns D for scores 60-69', () => {
        expect(main(60)).toBe('D');
        expect(main(65)).toBe('D');
        expect(main(69)).toBe('D');
    });

    it('returns F for scores 0-59', () => {
        expect(main(0)).toBe('F');
        expect(main(42)).toBe('F');
        expect(main(59)).toBe('F');
    });

    it('returns Invalid for scores out of range', () => {
        expect(main(-5)).toBe('Invalid');
        expect(main(105)).toBe('Invalid');
        expect(main(-1)).toBe('Invalid');
        expect(main(101)).toBe('Invalid');
    });
});
