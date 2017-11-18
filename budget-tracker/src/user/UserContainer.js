import React, { Component } from 'react';
import User from './UserComponent.js';

class UserContainer extends Component {
  constructor(props) {
     super(props);
    }

    render() {
      return (
        <div className="user-container">
          <CommentSection username={this.props.user.username} /> 
        </div>
  );
}
}

export default UserContainer;