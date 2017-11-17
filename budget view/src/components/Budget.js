import React from 'react';

const Budget = (props) => {
  return (
    <div className="Budget">
      <h3>{props.name}</h3><strong>{props.description} {props.budgetedAmount}</strong>
      <br />
    </div>
  );
}

export default Budget;