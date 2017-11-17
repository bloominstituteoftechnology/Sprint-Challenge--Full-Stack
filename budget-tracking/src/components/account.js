import React from 'react';

const Account = (props) => (
  <div className="account">
    <h3>Account Name: {props.name}</h3>
    <p>Account Description: {props.description}</p>
    <h4>Account Budget: {props.budget}</h4>
    <p>Active Account: {props.isActive ?'yes' :'no'}</p>
    <button onClick={() => {
      window.location.href='edit?' + props.id;
    }}>Edit</button>
  </div>
);

export default Account;