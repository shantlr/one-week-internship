import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Fir Tree', () => {
    it('generates tree of height 1', () => {
        expect(main(1)).toBe('*\n|');
    });

    it('generates tree of height 2', () => {
        expect(main(2)).toBe(' *\n***\n |');
    });

    it('generates tree of height 3', () => {
        expect(main(3)).toBe('  *\n ***\n*****\n  |');
    });

    it('generates tree of height 5', () => {
        const expected = [
            '    *',
            '   ***',
            '  *****',
            ' *******',
            '*********',
            '    |'
        ].join('\n');
        expect(main(5)).toBe(expected);
    });

    it('generates tree of height 7', () => {
        const expected = [
            '      *',
            '     ***',
            '    *****',
            '   *******',
            '  *********',
            ' ***********',
            '*************',
            '      |'
        ].join('\n');
        expect(main(7)).toBe(expected);
    });
});
