/*
 * Whack-a-Mole
 *
 * Build the HTML/CSS and implement the game:
 *
 * 1. Create the UI:
 *    - 3x3 grid of holes
 *    - Score and timer display
 *    - Start button
 *    - Game over message
 *
 * 2. Start button begins the game:
 *    - Start 30 second countdown
 *    - Start showing moles
 *
 * 3. Mole logic:
 *    - Pick random hole
 *    - Show mole (add class or change style)
 *    - Hide after random time (500-1500ms)
 *    - Don't show in same hole twice in a row
 *
 * 4. Click logic:
 *    - Only count if mole is visible
 *    - Increment score
 *    - Hide mole immediately
 *
 * 5. Game over:
 *    - Stop mole spawning
 *    - Show final score
 *    - Enable start button
 *
 * Use:
 * - setInterval for game timer
 * - setTimeout for mole timing
 * - Math.random() for random hole/timing
 */

// Your code here
