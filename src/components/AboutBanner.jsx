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
import Understanding from '../images/understanding.jpg';
const useStyles = makeStyles((theme) => ({
  aboutbanner: {
    height: '100vh',
    background: `url(${Understanding}) center/cover`,
    [theme.breakpoints.down('sm')]: {
      padding: '.5rem',
      height: '80vh',
    },
  },
  content: {
    width: '55%',
    transform: 'translate(0%,50%)',
    backgroundColor: 'rgba(249,86,79,.85)',
    padding: '1rem',
    borderRadius:'4px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      transform: 'translate(0%,70%)',
    },
  },
  mainheadline: {
    fontWeight: '700',
    fontSize: '3.2rem',
    lineHeight: '4.5rem',
    

    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      lineHeight: '3rem',
    },
  },
}));

const Aboutbanner = () => {
  const classes = useStyles();
  return (
    <Container className={classes.aboutbanner}>
      <Box className={classes.content}>
        <Typography variant="h3" className={classes.mainheadline}>
          We build a common ground of understanding <br />
          between businesses and consumers <br />
          for the greater good.
          <br />
        </Typography>
      </Box>
    </Container>
  );
};

export default Aboutbanner;
