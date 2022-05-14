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

import CardWhy from './CardWhy';

const useStyles = makeStyles((theme) => ({
  joinCommunity: {
    width: '100%',
    height: '100vh',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '1.5rem',
      height: 'auto',
    },
  },
  firstQuarter: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: '40vh',
      maxHeight: '50vh',
    },
  },

  thirdBox: {
    width: '20%',
    height: '320px',
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginBottom: '1rem',
      height: 'auto',
      maxHeight: '60vh',
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
            Join the community of active reviewers across Algeria
          </Typography>
          <Typography
            component="div"
            variant="body1"
            gutterBottom
            style={{
              color: 'gray',
              lineHeight: '1.6rem',
              fontSize: '1.1rem',
              fontWeight: '300',
            }}
          >
            We aim to create a larfge community of algerian consumers to help
            defend their rights and better be understood by the major active
            businesses.
          </Typography>
          <Button color="secondary" variant="contained" >
            Join our now
          </Button>
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join01} />
          <Typography
            variant="body1"
            component="div"
            style={{
              color: 'gray',
              lineHeight: '1.6rem',
              fontSize: '1.1rem',
              fontWeight: '300',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque repellat aperiam vel quae eos consectetur recusandae
            ipsum, inventore repudiandae?
          </Typography>
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join02} />
          <Typography
            variant="body1"
            component="div"
            style={{
              color: 'gray',
              lineHeight: '1.6rem',
              fontSize: '1.1rem',
              fontWeight: '300',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque repellat aperiam vel quae eos consectetur recusandae
            ipsum, inventore repudiandae?
          </Typography>
        </Box>
        <Box className={classes.thirdBox}>
          <img src={Join03} />
          <Typography
            variant="body1"
            component="div"
            style={{
              color: 'gray',
              lineHeight: '1.6rem',
              fontSize: '1.1rem',
              fontWeight: '300',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque repellat aperiam vel quae eos consectetur recusandae
            ipsum, inventore repudiandae?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinCommunity;
