import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Word Count', () => {
    it('counts words in simple sentence', () => {
        expect(main('hello world')).toEqual({ hello: 1, world: 1 });
    });

    it('counts repeated words', () => {
        expect(main('the cat and the dog')).toEqual({ the: 2, cat: 1, and: 1, dog: 1 });
    });

    it('is case-insensitive', () => {
        expect(main('Hello, hello, HELLO!')).toEqual({ hello: 3 });
    });

    it('handles empty string', () => {
        expect(main('')).toEqual({});
    });

    it('ignores punctuation', () => {
        expect(main('hello, world!')).toEqual({ hello: 1, world: 1 });
        expect(main("it's a test")).toEqual({ its: 1, a: 1, test: 1 });
    });

    it('handles multiple spaces', () => {
        expect(main('hello   world')).toEqual({ hello: 1, world: 1 });
    });

    it('handles complex text', () => {
        const text = 'To be, or not to be, that is the question.';
        const result = main(text);
        expect(result.to).toBe(2);
        expect(result.be).toBe(2);
        expect(result.the).toBe(1);
    });
});
