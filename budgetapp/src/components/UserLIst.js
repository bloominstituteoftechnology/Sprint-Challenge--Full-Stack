import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../actions';
import User from './User';

class UserList extends Component {
  componentDidMount(){
    this.props.getUserList();
  }
  render() {
    return(
      <ul>
        {this.props.userList.map((user, i) => {
          return(
            <User key = {i} id = {i} user = {user} />
          )
        })};
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    userList: state.userList
  };
}

export default connect(mapStateToProps, { getUserList })(UserList);