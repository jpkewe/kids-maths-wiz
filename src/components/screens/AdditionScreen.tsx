import { OperationLayout } from './OperationLayout';

interface AdditionScreenProps {
  onBack: () => void;
}

export function AdditionScreen({ onBack }: AdditionScreenProps) {
  return (
    <OperationLayout title="Addition Practice" onBack={onBack}>
      <div className="operation-description">
        <p>Practice adding numbers together!</p>
        <div className="difficulty-options">
          <h3>Select Difficulty:</h3>
          <div className="difficulty-buttons">
            <button className="difficulty-button easy">Easy (1-10)</button>
            <button className="difficulty-button medium">Medium (1-50)</button>
            <button className="difficulty-button hard">Hard (1-100)</button>
          </div>
        </div>
      </div>
    </OperationLayout>
  );
}