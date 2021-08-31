import React, { useState, useEffect } from 'react';

export default ({ userPassCallback, userPass, userNameCallback, handleSubmit, userName, definedUserName, skillLevel }) => {

  const generateForm = () => {
    if (definedUserName) {
      return (
        <>
          <h5 className='login-header' style={{ display: 'inline' }}>{'Logged in as... '}</h5>
          <h5 className='login-header' style={{ display: 'inline' }}>{definedUserName}</h5>
        </>
      )
    } else {
      return (
        <>
          <input className='login-header' value='Login ->' type='submit'></input>
          <input type='text' disabled={definedUserName ? true : false} onChange={userNameCallback} value={definedUserName || userName} placeholder='enter username' value={userName} />
          <input type='text' placeholder='password' value={userPass} onChange={userPassCallback} />
        </>
      )
    }
  }
  return (
    <form id='login-form' className={skillLevel} onSubmit={handleSubmit}>
      {
        generateForm()
      }
    </form>

  )
};