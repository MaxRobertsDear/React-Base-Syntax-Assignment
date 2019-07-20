import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Username: {props.username}</p>
      <p>{props.content}</p>
    </div>
  )
}

export default UserOutput;

