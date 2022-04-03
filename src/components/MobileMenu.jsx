import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mobileMenu: {
    width: '100%',
    height: '100vh',

    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(206deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    position: 'absolute',
    left: '0px',
    top: '0',
    zIndex: 200,
    transition: ' all 500ms ease-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingLeft: '3rem',
    '& a': {
      border: '1px #ccc solid',
      background: '#ccc',
      padding: '1rem 10rem 1rem 1rem',
      width: '30%',
      color: '#fafafa',
    },
    [theme.breakpoints.up('sm')]: {
      // display: 'none',
    },
  },
}));

const MobileMenu = ({ CloseMobileMenu }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mobileMenu}>
      <Link to="/" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        Home
      </Link>
      <Link
        to="/writeReview"
        sx={{ minWidth: 100 }}
        className={classes.navItem}
        onClick={CloseMobileMenu}
      >
        Write a Review
      </Link>
      <Link to="/categories" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        Categories
      </Link>
      <Link to="/community" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        Community
      </Link>
      <Link to="/businesses" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        For Businesses
      </Link>
      <Link to="/login" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        LogIn
      </Link>
      <Link to="/dashboard/1" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        Dashboard
      </Link>
    </Box>
  );
};

export default MobileMenu;
