import { describe, it, expect } from 'vitest';
import { main } from './index.js';
import { isCombatOver, isPlayerAlive } from './library/index.js';

describe('Battle Arena', () => {
    it('wins against passive enemy', () => {
        const result = main({
            playerHealth: 100,
            playerEnergy: 50,
            enemyHealth: 50,
            enemyPattern: ['defend', 'defend', 'defend']
        });

        expect(isCombatOver()).toBe(true);
        expect(result).toBe(true);
        expect(isPlayerAlive()).toBe(true);
    });

    it('wins against aggressive enemy', () => {
        const result = main({
            playerHealth: 100,
            playerEnergy: 50,
            enemyHealth: 80,
            enemyPattern: ['attack', 'attack', 'attack']
        });

        expect(isCombatOver()).toBe(true);
        expect(result).toBe(true);
    });

    it('wins against mixed strategy enemy', () => {
        const result = main({
            playerHealth: 100,
            playerEnergy: 50,
            enemyHealth: 100,
            enemyPattern: ['attack', 'attack', 'defend', 'heal']
        });

        expect(isCombatOver()).toBe(true);
        expect(result).toBe(true);
    });

    it('survives tough fight', () => {
        const result = main({
            playerHealth: 100,
            playerEnergy: 50,
            enemyHealth: 100,
            enemyPattern: ['attack', 'attack', 'attack', 'heal']
        });

        expect(isCombatOver()).toBe(true);
        expect(typeof result).toBe('boolean');
    });

    it('handles low energy start', () => {
        const result = main({
            playerHealth: 100,
            playerEnergy: 10,
            enemyHealth: 50,
            enemyPattern: ['attack', 'defend']
        });

        expect(isCombatOver()).toBe(true);
        expect(result).toBe(true);
    });

    it('loads config from file path', () => {
        const result = main('./examples/easy.json');
        expect(isCombatOver()).toBe(true);
        expect(result).toBe(true);
    });
});
