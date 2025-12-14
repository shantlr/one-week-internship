import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Unique Characters', () => {
    it('removes duplicate characters', () => {
        expect(main('hello')).toBe('helo');
        expect(main('aabbccabc')).toBe('abc');
    });

    it('preserves order of first appearance', () => {
        expect(main('programming')).toBe('progamin');
        expect(main('abcabc')).toBe('abc');
    });

    it('returns same string if all unique', () => {
        expect(main('abcdef')).toBe('abcdef');
    });

    it('handles single repeated character', () => {
        expect(main('aaaaaa')).toBe('a');
    });

    it('handles empty string', () => {
        expect(main('')).toBe('');
    });

    it('is case-sensitive', () => {
        expect(main('AaAa')).toBe('Aa');
        expect(main('HelloHELLO')).toBe('HelopELO');
    });

    it('handles spaces and special characters', () => {
        expect(main('a b a b')).toBe('a b');
        expect(main('!!@@!!')).toBe('!@');
    });
});
