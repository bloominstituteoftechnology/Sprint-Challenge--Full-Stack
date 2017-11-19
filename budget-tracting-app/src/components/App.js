import React, { Component } from 'react';
import './App.css';
// import UserList from './UserList.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      name: '',
      description: '',
      budgetAmt: 0,
      isActive: false
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserDescriptionChange = this.handleUserDescriptionChange.bind(this);
    this.handleUserBudgetAmtChange = this.handleUserBudgetAmtChange.bind(this);
    this.handleUserIsActiveChange = this.handleUserIsActiveChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleUserDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleUserBudgetAmtChange(event) {
    this.setState({ budgetAmt: event.target.value });
  }

  handleUserIsActiveChange(event) {
    this.setState({ isActive: event.target.value });
  }

  handleAddUser() {
    const newUser = {};
    newUser['id'] = this.state.userList.length;
    newUser['username'] = this.state.name;
    newUser['description'] = this.state.description;
    newUser['budgetAmt'] = this.state.budgetAmt;
    newUser['isActive'] = this.state.isActive;

    const newUserList = this.state.userList;
    newUserList.push(newUser);
    this.setState({
      userList:newUserList, 
      name: '',
      description: '',
      budgetAmt: 0,
      isActive: false
    });
    console.log('this.state.userList', this.state.userList);
  }

  handleRemoveUser(userId) {
    const newUserList = this.state.userList;
    newUserList.forEach((currUser, i) => {
      console.log('currUser.id ', currUser.id);
      if (currUser.id === userId) {
        console.log('removing ', userId);
        newUserList.splice(i, 1);
      }
    });
    this.setState({ userList: newUserList  });
  }

  componentDidMount() {
    const usersEndpoint = 'http://localhost:5000/userdata';
    axios.get(usersEndpoint).then(res => {
      console.log("res: " + res.data[0]);
      const newUserList = res.data;
      this.setState({ userList: newUserList  });
      console.log('this.state.userList', this.state.userList);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value = {this.state.name}
          onChange={this.handleUserNameChange}
        />
        <input
          type="text"
          value = {this.state.description}
          onChange={this.handleUserDescriptionChange}
        />
        <input
          type="text"
          value = {this.state.budgetAmt}
          onChange={this.handleUserBudgetAmtChange}
        />
        <input
          type="text"
          value = {this.state.isActive}
          onChange={this.handleUserIsActiveChange}
        />
        <button onClick={this.handleAddUser}>Submit User</button>
        {this.state.userList.map(user => {
        return (
          <div key={user.username}>
            {user.username}
            <button
              onClick={() => {
                this.handleRemoveUser(user.id);
             }}
            >
             Remove User
            </button>
          </div>
        );
        })}
      </div>
    );
  }
}

export default App;
