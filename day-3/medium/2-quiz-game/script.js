/*
 * Quiz Game
 *
 * Implement the quiz game:
 *
 * 1. Store questions as array of objects:
 *    { question: "...", answers: ["A", "B", "C", "D"], correct: 0 }
 *
 * 2. Display current question and answers
 *
 * 3. On answer click:
 *    - Disable all buttons
 *    - Highlight correct answer (green)
 *    - Highlight wrong answer if selected (red)
 *    - Update score if correct
 *    - Show "Next" button
 *
 * 4. On next click:
 *    - Move to next question
 *    - Or show results if last question
 *
 * 5. On restart:
 *    - Reset score and question index
 *    - Show quiz again
 */

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink Text Management Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["font-color", "text-color", "color", "foreground"],
        correct: 2
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Desktop Oriented Machine"
        ],
        correct: 0
    },
    {
        question: "Which method selects an element by ID?",
        answers: [
            "document.query('#id')",
            "document.getElementById('id')",
            "document.selectId('id')",
            "document.findById('id')"
        ],
        correct: 1
    },
    {
        question: "How do you add an event listener?",
        answers: [
            "element.onEvent(fn)",
            "element.listen('event', fn)",
            "element.addEventListener('event', fn)",
            "element.attachEvent('event', fn)"
        ],
        correct: 2
    }
];

// Your code here
