/**
 * Types and interfaces for the math engine
 */

/**
 * Represents the different operation types
 */
export type OperationType = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'random';

/**
 * Represents the difficulty levels
 */
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

/**
 * Represents the range of operands for each difficulty level
 */
export interface OperandRange {
  min: number;
  max: number;
}

/**
 * Represents a math problem
 */
export interface MathProblem {
  operands: number[];
  operation: OperationType;
  answer: number;
  displayString: string;
}

/**
 * Represents the difficulty settings for each operation
 */
export interface DifficultySettings {
  [key: string]: {
    easy: OperandRange;
    medium: OperandRange;
    hard: OperandRange;
  };
}