import React from 'react';
import useStoreContext from 'Store/useStoreContext.js';
import './skillstyles.scss';

export default React.memo(() => {
  const [{ dimensions: { skillLevel } }, dispatch] = useStoreContext();
  return (
    <div className={skillLevel} id='skill-level-selector'>
      <button onClick={_ => dispatch({ type: 'SET BEGINNER DIMENSIONS' })}>Beginner</button>
      <button onClick={_ => dispatch({ type: 'SET INTERMEDIATE DIMENSIONS' })}>Intermediate</button>
      <button onClick={_ => dispatch({ type: 'SET ADVANCED DIMENSIONS' })}>Expert</button>
    </div >
  )
})