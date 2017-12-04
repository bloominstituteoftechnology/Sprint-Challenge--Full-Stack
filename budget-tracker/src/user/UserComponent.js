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

handleSubmit = (event, username, password) => {
  console.log(`handleSubmit ${username} ${password}`)
  event.preventDefault();
  // const username = findDOMNode(this.refs.nameInput).value;
  // const newName = {
  //     username
  // };
  axios.post(`http://localhost:1234/api/users/`, { username, password }).then((res) => {
    this.setState({
        users: [...this.state.users, res.data]
    });
    console.log(res);
  })
  //findDOMNode(this.refs.nameInput).value = '';
  .catch((err) => {
    console.log('error', err);
  })
};

  render() {
    let name;
    let password;

    return (
      <div>
        <h1>User Accounts</h1>
        <ul>
          {this.state.users.map(users =>
            <ul key={users._id}>
            <h3>Username:{users.username}</h3>
            <ul>Password:{users.password}</ul>
            </ul>
          )}
        </ul>
        <form onSubmit={(e) => {
          this.handleSubmit(e, name.value, password.value)
        }}>
            <input ref={node => name = node} />
            <input ref={node => password = node} />
            <button type="submit">Submit</button>
        </form>
        <div className="usersName-input">
          <input type="text" placeholder="Input New User" ref="nameInput" />
              {' '}
        </div>
      </div>
    );
  }
}

export default User;