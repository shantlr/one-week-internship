/*
 * Memory Cards
 *
 * Build the HTML/CSS and implement the memory game:
 *
 * 1. Create the UI:
 *    - 4x4 grid of cards
 *    - Stats display (moves, timer, pairs found)
 *    - Restart button
 *    - Win message
 *
 * 2. Setup:
 *    - Create pairs of cards (8 pairs = 16 cards)
 *    - Shuffle the cards
 *    - Generate card elements
 *
 * 3. Card flip logic:
 *    - Click to flip card
 *    - Track first and second flipped card
 *    - Prevent flipping more than 2 at once
 *    - Prevent flipping already matched cards
 *
 * 4. Match check:
 *    - If cards match: keep flipped, mark as matched
 *    - If no match: flip back after 1 second delay
 *    - Increment move counter
 *
 * 5. Win condition:
 *    - All pairs found
 *    - Stop timer
 *    - Show win message
 *
 * 6. Timer:
 *    - Start on first card flip
 *    - Update every second
 *    - Format as M:SS
 */

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

// Helper: Shuffle array (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Your code here
