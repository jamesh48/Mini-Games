import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import './skillstyles.scss';

export default React.memo(() => {
  const [{ dimensions: { skillLevel } }, globalDispatch] = useGlobalContext();
  return (
    <div className={skillLevel} id='skill-level-selector'>
      <button onClick={_ => globalDispatch({ type: 'SET BEGINNER DIMENSIONS' })}>Beginner</button>
      <button onClick={_ => globalDispatch({ type: 'SET INTERMEDIATE DIMENSIONS' })}>Intermediate</button>
      <button onClick={_ => globalDispatch({ type: 'SET ADVANCED DIMENSIONS' })}>Expert</button>
    </div >
  )
})