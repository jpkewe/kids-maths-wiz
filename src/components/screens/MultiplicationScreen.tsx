import { OperationLayout } from './OperationLayout';

interface MultiplicationScreenProps {
  onBack: () => void;
}

export function MultiplicationScreen({ onBack }: MultiplicationScreenProps) {
  return (
    <OperationLayout title="Multiplication Practice" onBack={onBack}>
      <div className="operation-description">
        <p>Practice multiplying numbers!</p>
        <div className="difficulty-options">
          <h3>Select Difficulty:</h3>
          <div className="difficulty-buttons">
            <button className="difficulty-button easy">Easy (1-5)</button>
            <button className="difficulty-button medium">Medium (1-10)</button>
            <button className="difficulty-button hard">Hard (1-12)</button>
          </div>
        </div>
      </div>
    </OperationLayout>
  );
}