import React from 'react';
import './skillstyles.scss';

export default React.memo(({ skillCallback, skillLevel }) => {
  return (
    <div className={skillLevel} id='skill-level-selector'>
      <button id='beginner' onClick={skillCallback}>Beginner</button>
      <button id='intermediate' onClick={skillCallback}>Intermediate</button>
      <button id='advanced' onClick={skillCallback}>Expert</button>
    </div>
  )
})