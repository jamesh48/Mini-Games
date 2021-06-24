import React from 'react';

export default ({ skillCallback }) => {

  return (
    <div>
      <button id='beginner' onClick={skillCallback}>Beginner</button>
      <button id='intermediate' onClick={skillCallback}>Intermediate</button>
      <button id='advanced' onClick={skillCallback}>Expert</button>
    </div>
  )
}