import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  burgerMenu: {
    width: '80vw',
    height: '60vh',
    backgroundColor: 'yellow',
    position: 'absolute',
    left: '-60px',
    top: '0',
    zIndex: '9',
    transition: ' all 500ms ease-out',
    [theme.breakpoints.up('sm')]: {
      // display: 'none',
    },
  },
}));

const BurgerMenu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.burgerMenu}>
      <Link to="/" sx={{ minWidth: 100 }}>
        Home
      </Link>
      <Link
        to="/writeReview"
        sx={{ minWidth: 100 }}
        className={classes.navItem}
      >
        Write a Review
      </Link>
      <Link to="/categories" sx={{ minWidth: 100 }}>
        Categories
      </Link>
      <Link to="/community" sx={{ minWidth: 100 }}>
        Community
      </Link>
      <Link to="/businesses" sx={{ minWidth: 100 }}>
        For Businesses
      </Link>
      <Link to="/signin" sx={{ minWidth: 100 }}>
        LogIn
      </Link>
    </Box>
  );
};

export default BurgerMenu;
