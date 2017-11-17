import React, { Component } from 'react';

import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Budget Tracker</h1>
        </header>
        <div className="Body">
          <BudgetForm />
          <BudgetList />
        </div>
      </div>

    );
  }
}

export default App;
