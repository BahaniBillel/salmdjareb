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
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  closemenu: {
    cursor: 'pointer',
    '& span': {
      height: '2px',
      width: '50px',
    },
    backgroundColor: '#000',
  },
}));

const BurgerMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.burgerMenu}>
      <div className={classes.closeMenu}>
        <span>x</span>
        <span></span>
      </div>
      burgerMenu
    </div>
  );
};

export default BurgerMenu;
