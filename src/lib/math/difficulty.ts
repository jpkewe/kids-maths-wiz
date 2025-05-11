import type { DifficultySettings, DifficultyLevel } from './types';

/**
 * Default difficulty settings for each operation
 * These define the range of operands for each difficulty level
 */
export const defaultDifficultySettings: DifficultySettings = {
  addition: {
    easy: { min: 1, max: 10 },
    medium: { min: 1, max: 50 },
    hard: { min: 1, max: 100 }
  },
  subtraction: {
    easy: { min: 1, max: 10 },
    medium: { min: 1, max: 50 },
    hard: { min: 1, max: 100 }
  },
  multiplication: {
    easy: { min: 1, max: 5 },
    medium: { min: 1, max: 10 },
    hard: { min: 1, max: 12 }
  },
  division: {
    easy: { min: 1, max: 5 },
    medium: { min: 1, max: 10 },
    hard: { min: 1, max: 12 }
  }
};

/**
 * Get the operand range for a specific operation and difficulty level
 */
export function getOperandRange(operation: string, difficulty: DifficultyLevel) {
  if (operation === 'random') {
    // For random operation, we'll use the addition ranges
    return defaultDifficultySettings.addition[difficulty];
  }
  
  return defaultDifficultySettings[operation][difficulty];
}

/**
 * Get the number of operands based on difficulty
 * Easy: 2 operands
 * Medium: 2-3 operands
 * Hard: 2-4 operands
 */
export function getOperandCount(difficulty: DifficultyLevel): number {
  switch (difficulty) {
    case 'easy':
      return 2;
    case 'medium':
      return Math.floor(Math.random() * 2) + 2; // 2-3
    case 'hard':
      return Math.floor(Math.random() * 3) + 2; // 2-4
    default:
      return 2;
  }
}