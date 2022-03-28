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
    transition: ' all 500ms ease-out',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const BurgerMenu = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.buttons}
      sx={{ flexGrow: 0.2, display: { xs: 'flex', md: 'none' } }}
    >
      <Link to="/" sx={{ minWidth: 100 }} className={classes.navItem}>
        Home
      </Link>
      <Link
        to="/writeReview"
        sx={{ minWidth: 100 }}
        className={classes.navItem}
      >
        Write a Review
      </Link>
      <Link to="/categories" sx={{ minWidth: 100 }} className={classes.navItem}>
        Categories
      </Link>
      <Link to="/community" sx={{ minWidth: 100 }} className={classes.navItem}>
        Community
      </Link>
      <Link to="/businesses" sx={{ minWidth: 100 }} className={classes.navItem}>
        For Businesses
      </Link>
      <Link to="/signin" sx={{ minWidth: 100 }} className={classes.navItem}>
        LogIn
      </Link>
    </Box>
  );
};

export default BurgerMenu;
