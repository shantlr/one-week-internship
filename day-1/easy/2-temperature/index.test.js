import { describe, it, expect } from 'vitest';
import { main } from './index.js';

describe('Temperature Converter', () => {
    it('converts Celsius to Fahrenheit', () => {
        expect(main(0, 'C', 'F')).toBe(32);
        expect(main(100, 'C', 'F')).toBe(212);
    });

    it('converts Celsius to Kelvin', () => {
        expect(main(0, 'C', 'K')).toBe(273.15);
        expect(main(100, 'C', 'K')).toBe(373.15);
    });

    it('converts Fahrenheit to Celsius', () => {
        expect(main(32, 'F', 'C')).toBe(0);
        expect(main(212, 'F', 'C')).toBe(100);
    });

    it('converts Kelvin to Celsius', () => {
        expect(main(273.15, 'K', 'C')).toBe(0);
        expect(main(300, 'K', 'C')).toBe(26.85);
    });

    it('converts Fahrenheit to Kelvin', () => {
        expect(main(32, 'F', 'K')).toBe(273.15);
    });

    it('converts Kelvin to Fahrenheit', () => {
        expect(main(273.15, 'K', 'F')).toBe(32);
    });

    it('handles same unit conversion', () => {
        expect(main(100, 'C', 'C')).toBe(100);
        expect(main(100, 'F', 'F')).toBe(100);
        expect(main(100, 'K', 'K')).toBe(100);
    });
});
