import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Palindrome Checker', () => {
    it('returns true for simple palindromes', () => {
        expect(main('radar')).toBe(true);
        expect(main('level')).toBe(true);
        expect(main('noon')).toBe(true);
    });

    it('returns false for non-palindromes', () => {
        expect(main('hello')).toBe(false);
        expect(main('world')).toBe(false);
        expect(main('race a car')).toBe(false);
    });

    it('ignores case', () => {
        expect(main('Radar')).toBe(true);
        expect(main('RaCeCaR')).toBe(true);
    });

    it('ignores spaces', () => {
        expect(main('A man a plan a canal Panama')).toBe(true);
        expect(main('Was it a car or a cat I saw')).toBe(true);
    });

    it('ignores punctuation', () => {
        expect(main("No 'x' in Nixon")).toBe(true);
        expect(main('A Santa at NASA!')).toBe(true);
    });

    it('handles single character', () => {
        expect(main('a')).toBe(true);
    });

    it('handles empty string', () => {
        expect(main('')).toBe(true);
    });
});
