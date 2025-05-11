/**
 * Math Engine
 * 
 * This module provides functionality for generating and validating math problems
 * for different operations and difficulty levels.
 */

// Export types
export type { 
  OperationType, 
  DifficultyLevel, 
  OperandRange, 
  MathProblem, 
  DifficultySettings 
} from './types';

// Export difficulty settings
export { 
  defaultDifficultySettings, 
  getOperandRange, 
  getOperandCount 
} from './difficulty';

// Export problem generators
export { 
  generateProblem,
  generateAdditionProblem,
  generateSubtractionProblem,
  generateMultiplicationProblem,
  generateDivisionProblem
} from './generators';

// Export validation functions
export {
  validateAnswer,
  getFeedbackMessage,
  calculateAccuracy
} from './validation';