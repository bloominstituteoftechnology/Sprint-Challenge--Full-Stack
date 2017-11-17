import React from 'react';

const Account = (props) => (
  <div className="account">
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <h4>{props.budget}</h4>
    <p>{props.isActive ?'yes' :'no'}</p>
  </div>
);

export default Account;