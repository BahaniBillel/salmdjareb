import React from 'react';
import {Box,TextField,makeStyles,Button} from '@material-ui/core';




const useStyles =makeStyles({
  loginForm:{
    width:"30vw",
    padding:"1.5rem",
  }
})


const Login = () => {
  const classes =useStyles();
  return (
    <Box className={classes.loginForm}>
      
      <TextField required type='email'label='email' fullWidth/>
      <TextField required type='password' label='password' fullWidth/>
      <Button type='submit' variant='contained' fullWidth>Submit</Button>
    </Box>
  )
};

export default Login;
