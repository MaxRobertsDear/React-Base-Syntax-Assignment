import React from 'react';

const UserOutput = function(props) {
  return (
    <div>
      <input type='text' onChange={props.changed} value={props.username} />
    </div>
  )
}

export default UserOutput;