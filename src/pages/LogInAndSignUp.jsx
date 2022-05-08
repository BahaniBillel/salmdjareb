import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
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
      {users.name ? <Login /> : <Register />}
    </div>
  );
};

export default LogInAndSignUp;
