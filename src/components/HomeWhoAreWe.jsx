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
import Cuir from '../images/cuir.jpg';
import Taylor from '../images/taylor.jpg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '70vh',
    padding: '3rem',
    marginTop: '8rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: '120vh',
      justifyContent: 'space-between',
    },
  },
  mainheadline: {
    fontSize: '2rem',
    fontWeight: '500',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  textBox: {
    width: '30%',
    // padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    fontWeight: '300',
  },
  imageBox: {
    width: '40%',
    height: '55%',
    background: `url(${Cuir}) top/cover`,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  insideImage: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    right: '-20%',
    top: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '150px',
      right: '0%',
      top: '80%',
      transform: 'translateX(-50%)',
    },
  },
}));

const Article = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageBox}>
        <img src={Taylor} alt="/" className={classes.insideImage} />
      </Box>
      <Box className={classes.textBox}>
        <Typography variant="h5" className={classes.mainheadline}>
          What is SAL-MDJAREB?
        </Typography>
        <Typography variant="body1" className={classes.text} component="div">
          SAL MDJAREB is an Algerian social network platform based on a
          crowdsourcing system that enables users to share their experiences and
          exchange the....
        </Typography>
        <Button
          variant="outlined"
          color="dark"
          style={{
            padding: '1rem 2.5rem',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
          gutterBottom
          href="/about"
        >
          Continue reading
        </Button>
      </Box>
    </Box>
  );
};

export default Article;
