import type { MathProblem } from './types';

/**
 * Validate a user's answer against the correct answer for a math problem
 * 
 * @param problem The math problem to validate against
 * @param userAnswer The user's answer to validate
 * @returns True if the answer is correct, false otherwise
 */
export function validateAnswer(problem: MathProblem, userAnswer: number): boolean {
  return problem.answer === userAnswer;
}

/**
 * Get feedback message based on whether the answer is correct
 * 
 * @param isCorrect Whether the answer is correct
 * @returns A feedback message
 */
export function getFeedbackMessage(isCorrect: boolean): string {
  if (isCorrect) {
    const correctMessages = [
      "Great job! That's correct!",
      "Excellent work! You got it right!",
      "Perfect! You're doing amazing!",
      "Correct! Keep up the good work!",
      "That's right! You're so smart!"
    ];
    return correctMessages[Math.floor(Math.random() * correctMessages.length)];
  } else {
    const incorrectMessages = [
      "Oops! That's not quite right. Try again!",
      "Not quite. Give it another try!",
      "Almost there! Try once more.",
      "That's not correct. Let's try again!",
      "Not right yet. Keep trying!"
    ];
    return incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
  }
}

/**
 * Calculate the percentage of correct answers
 * 
 * @param correct Number of correct answers
 * @param total Total number of answers
 * @returns The percentage as a number between 0 and 100
 */
export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}