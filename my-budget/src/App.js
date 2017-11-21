import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import AccountsContainer from './components/AccountsContainer';
import AccountContainer from './components/AccountContainer';


class App extends Component {
  render() {
    return (
     <div className="App">
        <Route exact path='/' component={AccountsContainer} />
        <Route exact path='/account' component={AccountContainer} />
      </div>
    );
  }
}
export default App;
