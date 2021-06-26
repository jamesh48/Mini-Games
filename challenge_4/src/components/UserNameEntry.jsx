import React, { useState, useEffect } from 'react';

export default ({ userPassCallback, userPass, userNameCallback, handleSubmit, userName, solidUserName, skillLevel }) => {

  const generateForm = () => {
    if (solidUserName) {
      return (
        <>
          <h5 className='login-header' style={{ display: 'inline' }}>{'Logged in as... '}</h5>
          <h5 className='login-header' style={{ display: 'inline' }}>{solidUserName}</h5>
        </>
      )
    } else {
      return (
        <>
          <h5 className='login-header'>Login -></h5>
          <input type='text' disabled={solidUserName ? true : false} onChange={userNameCallback} value={solidUserName || userName} placeholder='enter username' value={userName} />
          <input type='text' placeholder='password' value={userPass} onChange={userPassCallback} />
          <input hidden={true} type='submit' />
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
}