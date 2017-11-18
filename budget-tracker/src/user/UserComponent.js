import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import axios from 'axios';


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }


  componentDidMount() {
    axios.get(`http://localhost:1234/api/users/`).then(res => {
      this.setState({ 
        users: res.data
      });
    });
}

handleSubmit = (event) => {
  event.preventDefault();
  const username = findDOMNode(this.refs.nameInput).value;
  const newName = {
      username
  };
  this.setState({
      users: [...this.state.users, newName]
  });
  findDOMNode(this.refs.nameInput).value = '';
};

  render() {
    return (
      <div>
        <h1>User Accounts</h1>
        <ul>
          {this.state.users.map(users =>
            <ul key={users._id}>
            <h3>Username:{users.username}</h3>
            <ul>Password: {users.password}</ul>
            </ul>
          )}
        </ul>
        <div className="usersName-input">
          <input type="text" placeholder="Input New User" ref="nameInput" />
              {' '}
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default User;