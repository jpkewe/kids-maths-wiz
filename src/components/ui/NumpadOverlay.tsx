import React from 'react';
import { Button } from './button';

interface NumpadOverlayProps {
  onInputChange: (value: string) => void;
  isVisible: boolean;
}

const NumpadOverlay: React.FC<NumpadOverlayProps> = ({ onInputChange, isVisible }) => {
  const handleButtonClick = (value: string) => {
    onInputChange(value);
  };

  if (!isVisible) {
    return null; // Don't render if not visible
  }

  return (
    <div className="numpad-container"> {/* Changed class name */}
      <div className="numpad-grid">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Clear'].map((buttonValue) => (
          <Button
            key={buttonValue}
            onClick={() => handleButtonClick(buttonValue)}
            className={`numpad-button ${buttonValue.toLowerCase()}`}
          >
            {buttonValue === 'Backspace' ? '&#x232B;' : buttonValue === 'Clear' ? 'C' : buttonValue}
          </Button>
        ))}
      </div>
      {/* Removed close button */}
    </div>
  );
};

export default NumpadOverlay;