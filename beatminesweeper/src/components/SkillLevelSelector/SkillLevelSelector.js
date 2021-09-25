import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import './skillstyles.scss';

export default React.memo(() => {
  const [{ dimensions: { skillLevel } }, dispatch] = useGlobalContext();
  return (
    <div className={skillLevel} id='skill-level-selector'>
      <button onClick={_ => dispatch({ type: 'SET BEGINNER DIMENSIONS' })}>Beginner</button>
      <button onClick={_ => dispatch({ type: 'SET INTERMEDIATE DIMENSIONS' })}>Intermediate</button>
      <button onClick={_ => dispatch({ type: 'SET ADVANCED DIMENSIONS' })}>Expert</button>
    </div >
  )
})