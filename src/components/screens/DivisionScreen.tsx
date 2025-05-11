import { OperationLayout } from './OperationLayout';

interface DivisionScreenProps {
  onBack: () => void;
}

export function DivisionScreen({ onBack }: DivisionScreenProps) {
  return (
    <OperationLayout title="Division Practice" onBack={onBack}>
      <div className="operation-description">
        <p>Practice dividing numbers!</p>
        <div className="difficulty-options">
          <h3>Select Difficulty:</h3>
          <div className="difficulty-buttons">
            <button className="difficulty-button easy">Easy (1-10)</button>
            <button className="difficulty-button medium">Medium (1-20)</button>
            <button className="difficulty-button hard">Hard (1-50)</button>
          </div>
        </div>
      </div>
    </OperationLayout>
  );
}