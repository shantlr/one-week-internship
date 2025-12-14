/*
 * Battle Arena Library
 *
 * You control a fighter in combat against an enemy.
 * Each turn, you can attack, defend, or heal.
 */

const fs = require('fs');
const path = require('path');

let playerHealth = 100;
let playerEnergy = 50;
let enemyHealth = 100;
let enemyPattern = [];
let turnCount = 0;
let combatLog = [];

function init(config = {}, basePath = __dirname) {
    // Load from file if string path provided
    if (typeof config === 'string') {
        const filePath = path.resolve(basePath, config);
        config = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    playerHealth = config.playerHealth || 100;
    playerEnergy = config.playerEnergy || 50;
    enemyHealth = config.enemyHealth || 100;
    enemyPattern = config.enemyPattern || ['attack', 'attack', 'defend'];
    turnCount = 0;
    combatLog = [];
}

function getPlayerHealth() {
    return playerHealth;
}

function getPlayerEnergy() {
    return playerEnergy;
}

function getEnemyHealth() {
    return enemyHealth;
}

function getTurnCount() {
    return turnCount;
}

function isPlayerAlive() {
    return playerHealth > 0;
}

function isEnemyAlive() {
    return enemyHealth > 0;
}

function isCombatOver() {
    return !isPlayerAlive() || !isEnemyAlive();
}

// Attack: deals 15-25 damage, costs 10 energy
function attack() {
    if (playerEnergy < 10) {
        combatLog.push('Not enough energy to attack!');
        return false;
    }

    playerEnergy -= 10;
    const damage = 15 + Math.floor(Math.random() * 11); // 15-25
    const enemyAction = enemyPattern[turnCount % enemyPattern.length];

    let actualDamage = damage;
    if (enemyAction === 'defend') {
        actualDamage = Math.floor(damage / 2);
        combatLog.push(`You attack for ${damage}, enemy defends, takes ${actualDamage} damage`);
    } else {
        combatLog.push(`You attack for ${actualDamage} damage`);
    }

    enemyHealth -= actualDamage;
    enemyTurn();
    return true;
}

// Defend: reduces incoming damage by 50%, restores 5 energy
function defend() {
    playerEnergy = Math.min(100, playerEnergy + 5);
    combatLog.push('You defend and restore 5 energy');
    enemyTurn(true);
    return true;
}

// Heal: restores 20-30 health, costs 20 energy
function heal() {
    if (playerEnergy < 20) {
        combatLog.push('Not enough energy to heal!');
        return false;
    }

    playerEnergy -= 20;
    const healing = 20 + Math.floor(Math.random() * 11); // 20-30
    playerHealth = Math.min(100, playerHealth + healing);
    combatLog.push(`You heal for ${healing} health`);
    enemyTurn();
    return true;
}

function enemyTurn(playerDefending = false) {
    if (!isEnemyAlive()) return;

    const action = enemyPattern[turnCount % enemyPattern.length];
    turnCount++;

    if (action === 'attack') {
        const damage = 10 + Math.floor(Math.random() * 11); // 10-20
        let actualDamage = damage;
        if (playerDefending) {
            actualDamage = Math.floor(damage / 2);
            combatLog.push(`Enemy attacks for ${damage}, you defend, take ${actualDamage} damage`);
        } else {
            combatLog.push(`Enemy attacks for ${actualDamage} damage`);
        }
        playerHealth -= actualDamage;
    } else if (action === 'heal') {
        const healing = 15;
        enemyHealth = Math.min(100, enemyHealth + healing);
        combatLog.push(`Enemy heals for ${healing} health`);
    } else {
        combatLog.push('Enemy defends');
    }
}

function getCombatLog() {
    return [...combatLog];
}

module.exports = {
    init,
    attack,
    defend,
    heal,
    getPlayerHealth,
    getPlayerEnergy,
    getEnemyHealth,
    getTurnCount,
    isPlayerAlive,
    isEnemyAlive,
    isCombatOver,
    getCombatLog
};
