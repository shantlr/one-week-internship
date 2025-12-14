import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('FizzBuzz', () => {
    it('returns correct output for n=5', () => {
        expect(main(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });

    it('returns correct output for n=15', () => {
        expect(main(15)).toEqual([
            '1', '2', 'Fizz', '4', 'Buzz',
            'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz'
        ]);
    });

    it('returns empty array for n=0', () => {
        expect(main(0)).toEqual([]);
    });

    it('handles n=1', () => {
        expect(main(1)).toEqual(['1']);
    });

    it('handles n=3', () => {
        expect(main(3)).toEqual(['1', '2', 'Fizz']);
    });
});
