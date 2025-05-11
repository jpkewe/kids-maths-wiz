import { Button } from '../ui/button';
import type { ReactNode } from 'react';
import './OperationScreens.css';

interface OperationLayoutProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
}

export function OperationLayout({ title, children, onBack }: OperationLayoutProps) {
  return (
    <div className="operation-screen">
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