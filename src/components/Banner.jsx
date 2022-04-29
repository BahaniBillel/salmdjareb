import React, { useState } from 'react';
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import BannerImage from '../images/trusted.png';

import SearchBar from './SearchBar';
import CompaniezData from '../Donnes.json';
import Data from '../components/Data';

const useStyles = makeStyles((theme) => ({
  banner: {
    background: `linear-gradient(100deg, rgba(63, 63, 63, 0.8) 0%, rgba(205, 255, 255, .4) 55%),url(${BannerImage}) top/cover`,
    position: 'relative',
    height: '100vh',
    marginBottom: '-100px',
    zIndex: '-1',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      marginBottom: '0px',
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
    fontSize: '4rem',
    // fontWeight: '600',
    wordSpacing: '.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subText: {
    color: '#f9564f',
    fontSize: '1.5rem',
    marginTop: '.5rem',
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
    top: '45%',
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
      top: '50%',
      transform: 'translate(-50%,-50%)',

      // backgroundColor: 'yellow',
      margin: '0',
    },
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,.8)',
    marginTop: '.5rem',
    borderRadius: '4px',
    width: '',
  },
}));

const Banner = () => {
  const classes = useStyles();

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
          style={{ fontSize: '3rem', fontWeight: '600', color: 'white' }}
        >
          Share your experience.
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          className={classes.mainText}
          gutterBottom
          style={{ fontSize: '3rem', fontWeight: '600', color: 'white' }}
        >
          Make your decision.
        </Typography>

        <SearchBar data={CompaniezData} placeholder="enter your seracg h..." />

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
    </Box>
  );
};

export default Banner;
