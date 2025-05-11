import { OperationLayout } from './OperationLayout';

interface RandomScreenProps {
  onBack: () => void;
}

export function RandomScreen({ onBack }: RandomScreenProps) {
  return (
    <OperationLayout title="Random Operations Practice" onBack={onBack}>
      <div className="operation-description">
        <p>Practice all operations with random problems!</p>
        <div className="difficulty-options">
          <h3>Select Difficulty:</h3>
          <div className="difficulty-buttons">
            <button className="difficulty-button easy">Easy</button>
            <button className="difficulty-button medium">Medium</button>
            <button className="difficulty-button hard">Hard</button>
          </div>
        </div>
        <div className="operations-selection">
          <h3>Include Operations:</h3>
          <div className="operations-checkboxes">
            <label><input type="checkbox" defaultChecked /> Addition</label>
            <label><input type="checkbox" defaultChecked /> Subtraction</label>
            <label><input type="checkbox" defaultChecked /> Multiplication</label>
            <label><input type="checkbox" defaultChecked /> Division</label>
          </div>
        </div>
      </div>
    </OperationLayout>
  );
}