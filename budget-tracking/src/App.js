import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';

import myBudget from './components/accountsContainer.js';
import editAccount from './components/editAccount.js';
import newAccount from './components/newAccount.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ myBudget } exact />
          <Route path="/edit" component={ editAccount } />
          <Route path="/new" component={ newAccount } />
        </Switch>
      </div>
    );
  }
}

export default App;
