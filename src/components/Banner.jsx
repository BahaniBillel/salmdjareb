import React, { useState } from 'react';
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import BannerImage from '../images/trusted.png';
import CategoryShow from '../components/CategoryShow';
import HomeFeaures from './HomeFeatures';

const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${BannerImage}) top/cover`,
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'scale-down',
  },
  mainText: {
    // color: '#00695c',
    // textTransform: 'uppercase',
    fontSize: '3rem',
    // fontWeight: '600',
    wordSpacing: '.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subText: {
    color: '#f9564f',
    fontSize: '1.5rem',
    marginTop: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '.5rem',
    },
  },

  categoriesBanner: {
    width: '30%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  contentBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '2.5rem',
    width: 'auto',
    maxWidth: '90%',
    maxHeight: '50vh',
    // backgroundColor: "#fff",
    zIndex: '20',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      height: '220px',
      opacity: '.9',
      maxWidth: '70vw',
      left: '50%',
      top: '70%',
      transform: 'translateX(-50%)',

      // backgroundColor: 'yellow',
      margin: '0',
    },
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,.8)',
    marginTop: '.5rem',
    borderRadius: '5px',
    width: '',
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [input, setInput] = useState();

  const HandleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value.trim());
  };

  return (
    <Box className={classes.banner}>
      <Box className={classes.contentBox}>
        <Typography
          component="h1"
          variant="h1"
          className={classes.mainText}
          gutterBottom
          style={{ color: '#00695c', fontWeight: '500' }}
        >
          Find trusty reviews{' '}
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          className={classes.mainText}
          gutterBottom
          color="success"
        >
          Share your experience.
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          className={classes.mainText}
          gutterBottom
        >
          Make your decision.
        </Typography>

        <TextField
          id="standard-search"
          label="Search for a company or category"
          type="search"
          variant="outlined"
          fullWidth
          className={classes.searchInput}
          value={input}
          onChange={HandleInput}
        />

        <Typography
          component="p"
          variant="subtitle2"
          className={classes.subText}
          gutterBottom
        >
          {' '}
          1,450,092 reviews & rating from 100% verified users{' '}
        </Typography>
      </Box>
      <HomeFeaures />
    </Box>
  );
};

export default Banner;
