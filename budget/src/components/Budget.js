import React from 'react';

const Budget = (props) => {
  return (
    <div className="Budget">
      <ul>{props.name} {props.budgetedAmount} {props.isActive}</ul>
    </div>
  );
}

export default Budget;