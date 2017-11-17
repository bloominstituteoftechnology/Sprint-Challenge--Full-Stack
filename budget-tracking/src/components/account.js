import React from 'react';

const Account = (props) => (
  <div className="account">
    {console.log(props.id)}
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <h4>{props.budget}</h4>
    <p>{props.isActive ?'yes' :'no'}</p>
    <button onClick={() => {
      window.location.href='edit?' + props.id;
    }}>Edit</button>
  </div>
);

export default Account;