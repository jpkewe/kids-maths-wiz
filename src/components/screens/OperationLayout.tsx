import { Button } from '../ui/button';
import type { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import './OperationScreens.css';

interface OperationLayoutProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
}

export function OperationLayout({ title, children, onBack }: OperationLayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`operation-screen ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="operation-header">
        <Button 
          variant="outline" 
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </Button>
        <h2 className="operation-title">{title}</h2>
      </div>
      <div className="operation-content">
        {children}
      </div>
    </div>
  );
}