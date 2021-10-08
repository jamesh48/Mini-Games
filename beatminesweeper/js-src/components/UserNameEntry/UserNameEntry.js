import React from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import { useGlobalContext } from 'GlobalStore';
import { useUserNameContext } from 'UserNameStore';
import './loginstyles.scss';

export default () => {
  const [{ dimensions: { skillLevel }, definedUserName }, globalDispatch] = useGlobalContext();

  const [{ userPass, userName }, userNameDispatch] = useUserNameContext();

  // React.useEffect(() => {
  // }, [userPass, userName, skillLevel, definedUserName]);

  const handleSubmit = async () => {
    event.preventDefault();
    const { data: result } = await axios('/minesweeper-validateUser', { params: { userName, userPass } });

    if (result === 'does not exist') {
      const prompt = window.confirm('User does not exist, Create new user?');
      if (prompt) {
        const { data: posted } = await axios.post('/minesweeper-createUser', null, { params: { userName, userPass } });
        globalDispatch({ type: 'SET DEFINED USERNAME', payload: { userName } });
      };
    } else if (result === 'wrong password') {
      alert('Wrong Password, try again...');
    } else {
      globalDispatch({ type: 'SET DEFINED USERNAME', payload: { userName } });
    };
  };

  const generateForm = () => {
    // const [{ userName, userPass }, userNameDispatch] = useUserNameContext();

    return (
      <form id='login-form' className={skillLevel} onSubmit={handleSubmit}>
        {definedUserName ? (
          <>
            <h5 className='login-header'>{'Logged in as... '}</h5>
            <h5 className='login-header'>{definedUserName}</h5>
          </>
        ) : (
          <>
            <input className='login-header' value='Login ->' type='submit'></input>
            <input type='text' disabled={definedUserName ? true : false} onChange={_ => { userNameDispatch({ type: 'UPDATE USERNAME', payload: event.target.value }) }} value={definedUserName || userName} placeholder='enter username' />
            <input type='text' placeholder='password' value={userPass} onChange={_ => userNameDispatch({ type: 'UPDATE USERPASS', payload: event.target.value })} />
          </>
        )}
      </form>
    )
  };

  return generateForm();
};