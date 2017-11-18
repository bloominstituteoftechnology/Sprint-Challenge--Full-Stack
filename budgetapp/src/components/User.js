import React from 'react';

const User = ({user, id}) => {
  return(
    <li>
      <p>{`Name ${user.name}`}</p>
      <p>{`Name ${user.description}`}</p>
      <p>{`Name ${user.budgetAmount}`}</p>
    </li>
  )
}

export default User;