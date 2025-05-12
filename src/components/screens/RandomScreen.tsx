import { useState, useEffect, useRef } from 'react';
import { OperationLayout } from './OperationLayout';
import { Button } from '../ui/button';
import {
  generateProblem,
  validateAnswer,
  getFeedbackMessage,
  type DifficultyLevel,
  type MathProblem
} from '../../lib/math';
import ReactConfetti from 'react-confetti';
import useOperationFeedback from '../../hooks/useOperationFeedback'; // Import the new hook

interface RandomScreenProps {
  onBack: () => void;
}

export function RandomScreen({ onBack }: RandomScreenProps) {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
  const [problem, setProblem] = useState<MathProblem | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [canProceed, setCanProceed] = useState<boolean>(false);
  const hasProblemBeenCounted = useRef(false); // Ref to track if the current problem's stats have been counted
  const [stats, setStats] = useState({
    total: 0,
    correct: 0
  });

  // Use the custom hook for feedback animations and sounds
  const { showConfetti, answerInputRef } = useOperationFeedback(isCorrect);

  // Generate a new problem when component mounts or difficulty changes
  useEffect(() => {
    // Generate a new problem and log it
    const newProblem = generateProblem('random', difficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback(null);
    setIsCorrect(null);
    hasProblemBeenCounted.current = false; // Reset the ref for a new problem
    
    console.log('Generated new random problem in useEffect:', newProblem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  // Handle difficulty selection
  const handleDifficultySelect = (selected: DifficultyLevel) => {
    setDifficulty(selected);
  };

  // Handle answer submission
  const handleSubmit = () => {
    console.log('Submit button clicked');
    console.log('Current problem:', problem);
    console.log('User answer:', userAnswer);
    
    if (!problem) {
      console.log('No problem available');
      return;
    }
    
    if (!userAnswer) {
      console.log('No answer provided');
      return;
    }
    
    const numericAnswer = parseInt(userAnswer, 10);
    if (isNaN(numericAnswer)) {
      console.log('Invalid answer format');
      return;
    }
    
    const correct = validateAnswer(problem, numericAnswer);
    console.log(`Answer validation: ${numericAnswer} is ${correct ? 'correct' : 'incorrect'} for ${problem.displayString}`);
    
    setIsCorrect(correct);
    const feedbackMsg = getFeedbackMessage(correct);
    setFeedback(feedbackMsg);
    console.log('Feedback:', feedbackMsg);
    
    // Increment total attempts
    setStats(prevStats => ({
      ...prevStats,
      total: prevStats.total + 1
    }));

    // Update correct stats only if the answer is correct and hasn't been counted for this problem
    if (correct && !hasProblemBeenCounted.current) {
      setStats(prevStats => ({
        ...prevStats,
        correct: prevStats.correct + 1
      }));
      hasProblemBeenCounted.current = true; // Mark this problem as counted
      console.log('Updated correct stats.');
    } else if (!correct) {
       console.log('Answer is incorrect or already counted.');
    }
    
    if (correct) {
      setCanProceed(true);
    } else {
      setCanProceed(false); // User cannot proceed until correct answer
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const value = e.target.value.replace(/[^0-9]/g, '');
    setUserAnswer(value);
    // Reset feedback and correctness state when user starts typing again
    setFeedback(null);
    setIsCorrect(null);
    setCanProceed(false);
  };

  // Handle key press in the input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  
  // Handle next problem generation
  const handleNext = () => {
    console.log('Next button clicked, generating new problem');
    const newProblem = generateProblem('random', difficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback(null);
    setIsCorrect(null);
    setCanProceed(false);
    hasProblemBeenCounted.current = false; // Reset the ref for a new problem
    console.log('Generated new problem:', newProblem);
  };

  return (
    <OperationLayout title="Random Operations Practice" onBack={onBack}>
      {showConfetti && <ReactConfetti />} {/* Confetti animation */}
      <div className="operation-description">
        <p>Practice with random math operations!</p>
        
        <div className="difficulty-options">
          <h3>Select Difficulty:</h3>
          <div className="difficulty-buttons">
            <button
              className={`difficulty-button easy ${difficulty === 'easy' ? 'selected' : ''}`}
              onClick={() => handleDifficultySelect('easy')}
            >
              Easy (1-10)
            </button>
            <button
              className={`difficulty-button medium ${difficulty === 'medium' ? 'selected' : ''}`}
              onClick={() => handleDifficultySelect('medium')}
            >
              Medium (1-50)
            </button>
            <button
              className={`difficulty-button hard ${difficulty === 'hard' ? 'selected' : ''}`}
              onClick={() => handleDifficultySelect('hard')}
            >
              Hard (1-100)
            </button>
          </div>
        </div>
        
        {problem && (
          <div className="problem-container">
            <div className="problem-display">
              <h2>
                {problem.operands[0]} {problem.operation === 'addition' ? '+' : problem.operation === 'subtraction' ? '-' : problem.operation === 'multiplication' ? '×' : problem.operation === 'division' ? '÷' : ''} {problem.operands[1]} =
                <input
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="?"
                  className={`answer-field ${isCorrect === true ? 'correct' : ''} ${isCorrect === false ? 'incorrect' : ''}`}
                  ref={answerInputRef} // Add ref to input
                  autoFocus
                />
              </h2>
            </div>
            
            <div className="button-container"> {/* New container for buttons */}
              <div className="button-group">
                <Button
                  onClick={handleSubmit}
                  variant="default"
                  size="default"
                  className="action-button"
                >
                  Check Answer
                </Button>
                {canProceed && (
                  <Button
                    onClick={handleNext}
                    variant="secondary"
                    size="default"
                    className="action-button"
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
            
            {feedback && (
              <div className={`feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
                {feedback}
              </div>
            )}
          </div>
        )}
        
        <div className="stats-display">
          <p>Total Problems: <strong>{stats.total}</strong></p>
          <p>Correct Answers: <strong>{stats.correct}</strong></p>
          <p>Accuracy: <strong>{stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0}%</strong></p>
        </div>
      </div>
    </OperationLayout>
  );
}