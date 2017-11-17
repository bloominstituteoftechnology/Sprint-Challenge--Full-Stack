import React, { Component } from 'react';
import UserList from './components/UserLIst';
import AddUser from './components/AddUser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUser/>
        <UserList/>
      </div>
    );
  }
}

export default App;
