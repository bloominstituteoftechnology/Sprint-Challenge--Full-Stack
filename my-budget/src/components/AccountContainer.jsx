//import React from 'react';
import { connect } from 'react-redux';
import Account from './Account'
import { addAccount } from '../actions'

const mapStateToProps = (state) => {

  }
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      addAccount: (account) =>  dispatch(addAccount(account))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Account);
