import React, { useState } from 'react';
import Join01 from '../images/join01.jpg';
import Join02 from '../images/join02.jpg';
import Join03 from '../images/join03.jpg';
import {
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from './BurgerMenu';
import CardWhy from './CardWhy';

const useStyles = makeStyles((theme) => ({
  joinCommunity: {
    width: '100%',
    height: '80vh',
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDpirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstQuarter: {
    width: '30%',
  },

  thirdBox: {
    width: '20%',
    height: '320px',
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.joinCommunity}>
      <Container className={classes.innerWrapper}>
        <Box className={classes.firstQuarter}>
          <Typography component="div" variant="h4" gutterBottom>
            Join the community of active reviewrs across Algeria
          </Typography>
          <Typography component="div" variant="body1" gutterBottom>
            We aim to create a larfge community of algerian consumers to help
            defend their rights and better be understood by the major active
            businesses.
          </Typography>
          <Button color="secondary" variant="contained">
            Join
          </Button>
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join01} />
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join02} />
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join03} />
        </Box>
      </Container>
    </Box>
  );
};

export default JoinCommunity;
