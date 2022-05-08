import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

const useStyles = makeStyles({
  logIn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: '100vw',
    height: '100vh',
  },
});

function LogIn({ username }) {
  const classes = useStyles();

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.logIn}>
      <BreadCrumb />
      <Typography gutterBottom variant="h4" align="center">
        Welcom back
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Please enter your informations
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form onClick={HandleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={username}
                    // onChange={(e) => {
                    //   setName(e.target.value);
                    // }}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Typography variant="body1" style={{ marginTop: '1rem' }}>
              You don't have an account?, please
              <Link to="/Register"> Register</Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default LogIn;
