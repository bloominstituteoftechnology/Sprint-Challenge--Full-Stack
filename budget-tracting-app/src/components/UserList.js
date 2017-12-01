import React, { Component } from 'react';

class UserList extends Component {
	constructor(props){
		super(props);
		this.remove = this.remove.bind(this);
	}
	remove(obj) {
    	this.props.removeUser(obj.id);
  	}

	render() {
		return (
			<div>
				{this.props.userList.map(user => {
				return (
				  <div key={user.id}>
				    {user.name}
				    <button
				      onClick={() => {
				        this.remove(user);
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

export default UserList;