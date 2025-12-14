/*
 * Reaction Timer
 *
 * Implement the reaction timer game:
 *
 * States:
 * 1. waiting - Blue screen, "Click to Start"
 * 2. ready - Red screen, "Wait for green..."
 * 3. go - Green screen, "Click NOW!"
 * 4. result - Show reaction time
 *
 * Logic:
 * - Click in waiting → start timer (1-5s random delay)
 * - Click in ready (before green) → "Too early!", reset
 * - Click in go → calculate time, show result
 * - Click in result → back to waiting
 *
 * Use:
 * - setTimeout for random delay
 * - Date.now() to measure time
 * - classList to change states
 */

// Your code here
