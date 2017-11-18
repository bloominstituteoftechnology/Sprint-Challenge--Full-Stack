import React, { Component } from 'react';
import AccountsList from './components/AccountsList.js';
import AddAccount from './components/AddAccount.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddAccount />
        <AccountsList />
      </div>
    );
  }
}

export default App;
