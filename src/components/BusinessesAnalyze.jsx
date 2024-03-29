import * as React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
  ButtonGroup,
  Box,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import BannerImage from '../images/bg-businesses.svg';

const useStyles = makeStyles((theme) => ({
  businessAnalyze: {
    marginTop: '20rem',
    height: '100Vh',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      // height: '50%',
      flexDirection: 'column-reverse',
      height: '100vh',
      position: 'relative',
    },
  },
  imageBox: {
    transform: 'translateX(-20%)',
    width: '50%',
    height: '100%',
    background: `url(${BannerImage}) top/80%`,
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '0',
      top: '20%',
      zIndex: -1,
    },
  },
  textBox: {
    padding: ' 2rem',
    width: '50%',
    position: 'absolute',
    left: '60%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      transform: 'none',
      position: 'static',
      width: 'auto',
    },
  },
  headline: {
    fontSize: '3.5rem',
    fontWeight: '700',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  text: {
    fontSize: '1.4rem',
    textAlign: 'center',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
      width: 'auto',
    },
  },
  demoButton: {
    padding: ' .5rem 1rem',
    background: 'rgb(0,0,0)',
    color: '#fafafa',
  },
}));

const BusinessesAnalyze = () => {
  const classes = useStyles();
  return (
    <Box className={classes.businessAnalyze}>
      <Box className={classes.imageBox}></Box>
      <Box className={classes.textBox}>
        <Typography variant="h1" component="div" className={classes.headline}>
          Track your Business Metrics.
        </Typography>
        <Typography
          variant="body2"
          component="div"
          className={classes.text}
          gutterBottom
        >
          Review collection won’t just help you promote your business. It’ll
          help you improve it too. Our Platform will use  advanced linguistic
          AI to capture sentiment from review content, and give objective data
          on key performance areas.
        </Typography>
        <Button
          color="dark"
          variant="contained"
          className={classes.demoButton}
          href="/dashboard/1"
        >
          see the key metrics
        </Button>
      </Box>
    </Box>
  );
};

export default BusinessesAnalyze;
