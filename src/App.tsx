import { useState } from 'react'
import { Button } from './components/ui/button'
import { AdditionScreen } from './components/screens/AdditionScreen'
import { SubtractionScreen } from './components/screens/SubtractionScreen'
import { MultiplicationScreen } from './components/screens/MultiplicationScreen'
import { DivisionScreen } from './components/screens/DivisionScreen'
import { RandomScreen } from './components/screens/RandomScreen'
import { ThemeToggle } from './components/theme/ThemeToggle'
import { useTheme } from './components/theme/ThemeProvider'
// Removed NumpadOverlay import
import './App.css'

type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'random' | null;

function App() {
  const [selectedOperation, setSelectedOperation] = useState<Operation>(null);
  const { theme } = useTheme();

  // Removed isOperationScreenActive variable

  const handleOperationSelect = (operation: Operation) => {
    setSelectedOperation(operation);
    console.log(`Starting ${operation} mode`);
  };

  const handleBackToMenu = () => {
    setSelectedOperation(null);
  };

  // Removed handleNumpadInput function


  // Render the appropriate screen based on the selected operation
  const renderContent = () => {
    switch (selectedOperation) {
      case 'addition':
        return <AdditionScreen onBack={handleBackToMenu} />; // Removed onNumpadInput prop
      case 'subtraction':
        return <SubtractionScreen onBack={handleBackToMenu} />; // Removed onNumpadInput prop
      case 'multiplication':
        return <MultiplicationScreen onBack={handleBackToMenu} />; // Removed onNumpadInput prop
      case 'division':
        return <DivisionScreen onBack={handleBackToMenu} />; // Removed onNumpadInput prop
      case 'random':
        return <RandomScreen onBack={handleBackToMenu} />; // Removed onNumpadInput prop
      default:
        return (
          <div className="content-container">
            <div className="header">
              <h1 className="title">Kids Maths Wiz</h1>
              <p className="subtitle">
                A fun way for children to learn basic arithmetic
              </p>
            </div>
            
            <div className="status-message">
              Select an operation to begin
            </div>
            
            <div className="button-container">
              <Button
                className="operation-button"
                variant="default"
                onClick={() => handleOperationSelect('addition')}
              >
                ➕ Addition
              </Button>
              <Button
                className="operation-button"
                variant="outline"
                onClick={() => handleOperationSelect('subtraction')}
              >
                ➖ Subtraction
              </Button>
              <Button
                className="operation-button"
                variant="secondary"
                onClick={() => handleOperationSelect('multiplication')}
              >
                ✖️ Multiplication
              </Button>
              <Button
                className="operation-button"
                variant="destructive"
                onClick={() => handleOperationSelect('division')}
              >
                ➗ Division
              </Button>
              <Button
                className="operation-button"
                variant="ghost"
                onClick={() => handleOperationSelect('random')}
              >
                🔀 Random Mode
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}> {/* Removed conditional numpad-layout class */}
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      {renderContent()}
      {/* Removed NumpadOverlay rendering */}
    </div>
  );
}

export default App
