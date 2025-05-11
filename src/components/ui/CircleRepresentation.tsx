import React from 'react';

interface CircleRepresentationProps {
  count: number;
  operation: 'addition' | 'subtraction' | 'multiplication' | 'division';
  representationType: 'operand' | 'result';
  color?: string; // Optional color prop
  isSubtractionOperand?: boolean; // Specific prop for subtraction's second operand
  // TODO: Add props for multiplication and division grouping/arrangement
}

const CircleRepresentation: React.FC<CircleRepresentationProps> = ({
 count,
 operation,
 representationType,
 color = 'blue',
 isSubtractionOperand = false,
 // TODO: Destructure other multiplication and division props if needed
}) => {
 const renderCircles = () => {
   if (operation === 'multiplication' && representationType === 'operand') {
     // Render multiplication operands as a horizontal row of circles
     const circles = Array.from({ length: count }, (_, index) => (
       <div
         key={index}
         className="circle"
         style={{
           width: '20px',
           height: '20px',
           borderRadius: '50%',
           backgroundColor: color,
           margin: '2px',
           display: 'inline-block',
         }}
       ></div>
     ));
     // For multiplication, we just render the circles in a horizontal row
     return circles;
   } else if (operation === 'division' && representationType === 'operand') {
      // Visual representation for division operands
      const circles = Array.from({ length: count }, (_, index) => (
       <div
         key={index}
         className="circle"
         style={{
           width: '20px',
           height: '20px',
           borderRadius: '50%',
           backgroundColor: color,
           margin: '2px',
           display: 'inline-block',
         }}
       ></div>
     ));
     // For division, we just render the circles for both operands
     return circles;
   } else {
     // Default rendering for addition, subtraction operands/results, and division result
     const circles = Array.from({ length: count }, (_, index) => (
       <div
         key={index}
         className={`circle ${operation === 'subtraction' && representationType === 'operand' && isSubtractionOperand ? 'faded' : ''}`}
         style={{
           width: '20px',
           height: '20px',
           borderRadius: '50%',
           backgroundColor: color,
           margin: '2px',
           display: 'inline-block',
         }}
       ></div>
     ));
     return circles;
   }
 };

  return (
    <div className={`circle-representation ${operation}`}>
      {renderCircles()}
    </div>
  );
};

export default CircleRepresentation;