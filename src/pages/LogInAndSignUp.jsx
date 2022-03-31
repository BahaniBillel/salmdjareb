import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loginLogOut: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
  },
});

const LogInAndSignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const users = {
    name: 'billel',
  };
  return (
    <div className={classes.loginLogOut}>
      {users.name ? <Login /> : <SignUp />}
    </div>
  );
};

export default LogInAndSignUp;
