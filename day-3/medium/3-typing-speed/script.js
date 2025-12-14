/*
 * Typing Speed Test
 *
 * Build the HTML and implement the typing speed test:
 *
 * 1. Create the UI:
 *    - Display area for the quote
 *    - Input field to type in
 *    - Stats display (timer, WPM, accuracy)
 *    - Restart button
 *
 * 2. Display a quote/sentence to type
 *
 * 3. On each keystroke in the input:
 *    - Compare typed text with original
 *    - Highlight correct chars green, wrong chars red
 *    - Start timer on first keystroke
 *
 * 4. Calculate stats:
 *    - WPM = (characters typed / 5) / (time in minutes)
 *    - Accuracy = (correct chars / total chars) * 100
 *
 * 5. When complete (input matches quote):
 *    - Stop timer
 *    - Show final WPM
 *
 * 6. Restart button:
 *    - Clear input
 *    - Pick new quote
 *    - Reset timer and stats
 */

const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A journey of a thousand miles begins with a single step.",
    "Practice makes perfect.",
    "The only way to do great work is to love what you do.",
    "In the middle of difficulty lies opportunity.",
    "Code is like humor. When you have to explain it, it's bad."
];

// Your code here
