import { useState, useEffect, useRef } from 'react';
import useSound from './useSound';

const useOperationFeedback = (isCorrect: boolean | null) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const answerInputRef = useRef<HTMLInputElement>(null);

  const { play: playCheer } = useSound('/src/assets/sounds/cheer.mp3');
  const { play: playTryAgain } = useSound('/src/assets/sounds/try_again.mp3');

  useEffect(() => {
    if (isCorrect === true) {
      setShowConfetti(true);
      playCheer();
    } else if (isCorrect === false) {
      if (answerInputRef.current) {
        answerInputRef.current.classList.add('shake');
        answerInputRef.current.addEventListener('animationend', () => {
          if (answerInputRef.current) {
            answerInputRef.current.classList.remove('shake');
          }
        }, { once: true });
      }
      playTryAgain();
    } else {
      // Reset animations and sounds when isCorrect is null (e.g., new problem)
      setShowConfetti(false);
      if (answerInputRef.current) {
        answerInputRef.current.classList.remove('shake');
      }
    }
  }, [isCorrect, playCheer, playTryAgain]);

  return { showConfetti, answerInputRef };
};

export default useOperationFeedback;