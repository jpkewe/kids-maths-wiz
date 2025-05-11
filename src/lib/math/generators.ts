import type { OperationType, MathProblem, DifficultyLevel } from './types';
import { getOperandRange, getOperandCount } from './difficulty';

/**
 * Generate a random number within a range
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate an addition problem
 */
export function generateAdditionProblem(difficulty: DifficultyLevel): MathProblem {
  const range = getOperandRange('addition', difficulty);
  const operandCount = getOperandCount(difficulty);
  
  const operands: number[] = [];
  for (let i = 0; i < operandCount; i++) {
    operands.push(getRandomNumber(range.min, range.max));
  }
  
  const answer = operands.reduce((sum, operand) => sum + operand, 0);
  const displayString = operands.join(' + ') + ' = ?';
  
  return {
    operands,
    operation: 'addition',
    answer,
    displayString
  };
}

/**
 * Generate a subtraction problem
 */
export function generateSubtractionProblem(difficulty: DifficultyLevel): MathProblem {
  const range = getOperandRange('subtraction', difficulty);
  
  // For subtraction, we'll always use 2 operands to keep it simple
  // First operand should be larger than or equal to the second to avoid negative results
  const secondOperand = getRandomNumber(range.min, range.max);
  const firstOperand = getRandomNumber(secondOperand, range.max);
  
  const operands = [firstOperand, secondOperand];
  const answer = firstOperand - secondOperand;
  const displayString = `${firstOperand} - ${secondOperand} = ?`;
  
  return {
    operands,
    operation: 'subtraction',
    answer,
    displayString
  };
}

/**
 * Generate a multiplication problem
 */
export function generateMultiplicationProblem(difficulty: DifficultyLevel): MathProblem {
  const range = getOperandRange('multiplication', difficulty);
  const operandCount = difficulty === 'easy' ? 2 : getOperandCount(difficulty);
  
  const operands: number[] = [];
  for (let i = 0; i < operandCount; i++) {
    operands.push(getRandomNumber(range.min, range.max));
  }
  
  const answer = operands.reduce((product, operand) => product * operand, 1);
  const displayString = operands.join(' × ') + ' = ?';
  
  return {
    operands,
    operation: 'multiplication',
    answer,
    displayString
  };
}

/**
 * Generate a division problem
 */
export function generateDivisionProblem(difficulty: DifficultyLevel): MathProblem {
  const range = getOperandRange('division', difficulty);
  
  // For division, we'll always use 2 operands
  // We'll generate the divisor first, then multiply by a random number to get the dividend
  // This ensures we always have a whole number result
  const divisor = getRandomNumber(range.min, range.max);
  
  // The multiplier range depends on difficulty
  let multiplierMax = 10;
  if (difficulty === 'medium') multiplierMax = 12;
  if (difficulty === 'hard') multiplierMax = 15;
  
  const multiplier = getRandomNumber(1, multiplierMax);
  const dividend = divisor * multiplier;
  
  const operands = [dividend, divisor];
  const answer = dividend / divisor;
  const displayString = `${dividend} ÷ ${divisor} = ?`;
  
  return {
    operands,
    operation: 'division',
    answer,
    displayString
  };
}

/**
 * Generate a random problem based on the selected operation
 */
export function generateProblem(operation: OperationType, difficulty: DifficultyLevel): MathProblem {
  switch (operation) {
    case 'addition':
      return generateAdditionProblem(difficulty);
    case 'subtraction':
      return generateSubtractionProblem(difficulty);
    case 'multiplication':
      return generateMultiplicationProblem(difficulty);
    case 'division':
      return generateDivisionProblem(difficulty);
    case 'random': {
      // Randomly select an operation
      const operations: OperationType[] = ['addition', 'subtraction', 'multiplication', 'division'];
      const randomIndex = Math.floor(Math.random() * operations.length);
      return generateProblem(operations[randomIndex], difficulty);
    }
    default:
      return generateAdditionProblem(difficulty);
  }
}