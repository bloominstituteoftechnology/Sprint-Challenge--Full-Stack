import React from 'react';
import { connect } from 'react-redux';

import { getBudgets } from '../actions';

import Budgets from './Budgets';

const BudgetsContainer = (props) => {
  return (
    <Budgets />
  );
}

const mapStateToProps = (state) => {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps, { getBudgets })(Budgets);