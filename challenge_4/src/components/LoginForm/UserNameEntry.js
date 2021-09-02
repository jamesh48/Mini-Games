import React, { useState, useEffect } from 'react';
import './loginstyles.scss';

const areEqual = (prevProps, nextProps) => {
  // If the user is already logged in, don't render this component again.
  return (
    prevProps.definedUserName && (
      (JSON.stringify(prevProps.userNameCallback === nextProps.userNameCallback))
      || (JSON.stringify(prevProps.handleSubmit) === JSON.stringify(nextProps.handleSubmit))
      || (JSON.stringify(prevProps.userPassCallback) === JSON.stringify(nextProps.userPassCallback))
    )
  );
};

export default React.memo(({ userPass, userPassCallback, userName, userNameCallback, handleSubmit, definedUserName, skillLevel }) => {
  const generateForm = () => {
    return definedUserName ? (
      <>
        <h5 className='login-header'>{'Logged in as... '}</h5>
        <h5 className='login-header'>{definedUserName}</h5>
      </>
    ) : (
      <>
        <input className='login-header' value='Login ->' type='submit'></input>
        <input type='text' disabled={definedUserName ? true : false} onChange={userNameCallback} value={definedUserName || userName} placeholder='enter username' value={userName} />
        <input type='text' placeholder='password' value={userPass} onChange={userPassCallback} />
      </>
    )
  }

  return (
    <form id='login-form' className={skillLevel} onSubmit={handleSubmit}>
      {
        generateForm()
      }
    </form>
  )
}, areEqual);