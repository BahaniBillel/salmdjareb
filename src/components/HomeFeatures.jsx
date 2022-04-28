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
import Quality from '../images/badge.png';
import Chat from '../images/chat.png';
import Check from '../images/check.png';
const useStyles = makeStyles((theme) => ({
  homeFeaures: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    zIndex: '10',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '60vh',
    },
  },
  box: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    '& img': {
      height: '50px',
    },
  },
}));

const HomeFeaures = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeFeaures}>
      <Box
        className={classes.box}
        style={{
          color: 'gray',
          backgroundColor: '#fff',
          borderRadius: '4px',
          padding: '1rem',
        }}
      >
        <img src={Quality} />
        <Box style={{ marginLeft: '.5rem' }}>
          <Typography variant="h6" component="div" gutterBottom>
            Quality Improved.
          </Typography>
          <Typography variant="body2" component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est labore quidem laudanti.
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.box}
        style={{
          color: 'gray',
          backgroundColor: '#fff',
          borderRadius: '4px',
          padding: '1rem',
        }}
      >
        <img src={Check} />
        <Box style={{ marginLeft: '.5rem' }}>
          <Typography variant="h6" component="div" gutterBottom>
            100% Verified users
          </Typography>
          <Typography variant="body2" component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est labore quidem laudanti.
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.box}
        style={{
          color: 'gray',
          backgroundColor: '#fff',
          borderRadius: '4px',
          padding: '1rem',
        }}
      >
        <img src={Chat} />
        <Box style={{ marginLeft: '.5rem' }}>
          <Typography variant="h6" component="div" gutterBottom>
            People source of truth
          </Typography>
          <Typography variant="body2" component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est labore quidem laudanti.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeFeaures;
