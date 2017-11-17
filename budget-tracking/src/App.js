import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';

import myBudget from './components/accountsContainer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ myBudget } exact />
          {/*
            <Route path="/new" component={ newAccount } />
            <Route path="/edit" component={ editAccount } />
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
