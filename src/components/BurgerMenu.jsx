import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  burgerMenu: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'yellow',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '9',
    transition:" all 500ms ease-out",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  
}));

const BurgerMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.burgerMenu}>
      
      burgerMenu
    </div>
  );
};

export default BurgerMenu;
