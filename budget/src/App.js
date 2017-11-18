import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AccountsList from './components/AccountsList';
import CreateAccount from './components/CreateAccount';
import EditAccount from './components/EditAccount';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={AccountsList} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/edit/:id" component={EditAccount} />
      </div>
    );
  }
}

export default App;
