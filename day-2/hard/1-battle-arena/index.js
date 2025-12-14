/*
 * Exercise 2: Battle Arena
 *
 * Run: ./run.sh examples/easy.json
 *
 * Write an AI to win a fight against an enemy.
 *
 * Available functions (imported from library):
 * - attack()           → deals 15-25 damage, costs 10 energy, returns false if not enough energy
 * - defend()           → reduces incoming damage by 50%, restores 5 energy
 * - heal()             → restores 20-30 health, costs 20 energy, returns false if not enough energy
 * - getPlayerHealth()  → returns your current health (0-100)
 * - getPlayerEnergy()  → returns your current energy (0-100)
 * - getEnemyHealth()   → returns enemy's current health
 * - isPlayerAlive()    → returns true if you're alive
 * - isEnemyAlive()     → returns true if enemy is alive
 * - isCombatOver()     → returns true if combat ended
 *
 * Combat rules:
 * - You start with 100 health and 50 energy
 * - Enemy attacks deal 10-20 damage
 * - Combat ends when someone reaches 0 health
 * - Return true if you won, false if you lost
 *
 * Strategy tips:
 * - Defend when low on energy to regenerate
 * - Heal when health is critical
 * - Attack when you have energy and health is stable
 */

const {
    init,
    attack,
    defend,
    heal,
    getPlayerHealth,
    getPlayerEnergy,
    getEnemyHealth,
    isPlayerAlive,
    isEnemyAlive,
    isCombatOver,
} = require('./library');

function main(config) {
    // Initialize combat (config can be object or file path)
    init(config, __dirname);

    // Your code here
    // Fight until combat is over
    // Return true if you won, false if you lost
}

module.exports = { main };
