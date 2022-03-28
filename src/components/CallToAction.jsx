import React, { useState } from 'react';
import Reviewer01 from '../images/reviewer01.jpg';

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
  callToAction: {
    display: 'flex',
    height: '40vh',
    width: '100%',
    // backgroundColor: 'red',
    overflow: 'hidden',
    background: `url(${Reviewer01}) center/cover`,
    backgroundAttachment: 'fixed',
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  return <Box className={classes.callToAction}></Box>;
};

export default JoinCommunity;
