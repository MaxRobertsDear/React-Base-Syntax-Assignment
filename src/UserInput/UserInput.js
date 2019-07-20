import React from 'react';

import './UserInput.css';

const UserOutput = function(props) {
  return (
    <div className='UserInput'>
      <input type='text' onChange={props.changed} value={props.username} />
    </div>
  )
}

export default UserOutput;