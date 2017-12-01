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
    this.addUserFromServerResponse = this.addUserFromServerResponse.bind(this);
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

  // Used inside handleAddUser(). Passes as callback to axios.post().
  addUserFromServerResponse(response) {
    const newUserList = this.state.userList;
    // Server's response contains the new entry we just added.
    newUserList.push(response.data);
    this.setState({
      userList:newUserList, 
      name: '',
      description: '',
      budgetAmt: 0,
      isActive: false
    });
  }

  handleAddUser() {
    const newUser = {};

    newUser['id'] = this.state.userList.length;
    newUser['username'] = this.usernameInput.value;
    newUser['description'] = this.descriptionInput.value;
    newUser['budgetAmt'] = this.budgetAmtInput.value;
    newUser['isActive'] = this.isActiveInput.value;
    // OR
    // newUser['username'] = this.state.name;
    // newUser['description'] = this.state.description;
    // newUser['budgetAmt'] = this.state.budgetAmt;
    // newUser['isActive'] = this.state.isActive;

    const usersEndpoint = 'http://localhost:5000/adduser';
    axios.post(usersEndpoint, newUser)
    .then(this.addUserFromServerResponse)
    .catch(function (error) {
      console.log(error);
    });
  }

  // Used inside handleRemoveUser(). Passes as callback to axios.delete().
  deleteUserFromServerResponse(userId) {
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

  handleRemoveUser(userId) {
    const usersEndpoint = 'http://localhost:5000/deleteuser';
      axios.delete(usersEndpoint,  {params: {id: userId}})
      .then((res) => { this.deleteUserFromServerResponse(userId); })
      .catch(function (error) {
        console.log(error);
    });
  }

  componentDidMount() {
    const usersEndpoint = 'http://localhost:5000/userdata';
    axios.get(usersEndpoint).then(res => {
      if (res.data.length > 0) {
        const newUserList = res.data;
        this.setState({ userList: newUserList });
      }
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value = {this.state.name}
          ref={(ptr) => { this.usernameInput = ptr; }}
          onChange={this.handleUserNameChange}  // Not really needed, thanks to ref.
        />
        <input
          type="text"
          value = {this.state.description}
          ref={(ptr) => { this.descriptionInput = ptr; }}
          onChange={this.handleUserDescriptionChange}  // Not really needed, thanks to ref.
        />
        <input
          type="text"
          value = {this.state.budgetAmt}
          ref={(ptr) => { this.budgetAmtInput = ptr; }}
          onChange={this.handleUserBudgetAmtChange}  // Not really needed, thanks to ref.
        />
        <input
          type="text"
          value = {this.state.isActive}
          ref={(ptr) => { this.isActiveInput = ptr; }}
          onChange={this.handleUserIsActiveChange}  // Not really needed, thanks to ref.
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
