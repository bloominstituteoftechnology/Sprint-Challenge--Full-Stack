import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import Navigation, { Home } from './Navigation/Navigation.js';
import User from './user/UserComponent';
import Budget from './budget/BudgetComponent.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Budget Creator</h1>
          <Navigation />
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
        <Route exact path="/budget" component={Budget} />
      </div>
    );
  }
}

export default App;
