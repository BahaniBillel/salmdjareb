import React, { useState } from 'react';
import Logo from '../images/SAL-MDJAREB-V2.png';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from './BurgerMenu';

const useStyles = makeStyles((theme) => ({
  nav: {
    height: '70px',
    padding: '.5rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding:".5rem 2rem",
    },
    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(286deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoBox: {
    width: '100px',
  },
  logo: {
    height: '70px',
    fontWeight: '700',
    color: 'white',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#f9564f',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navItem: {
    color: '#ccc',
  },
  burgerMenu: {
    zIndex: 10,
    '& svg': {
      fontSize: '2.5rem',
      color: '#e0e0e0',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  return (
    <Box sx={{ flexGrow: 0 }} position="static" className={classes.nav}>
      <Link to="/">
        <Box className={classes.logoBox}>
          <img src={Logo} alt="sal mdjareb logo" className={classes.logo} />
          {/* <Typography className={classes.logo}>SAL MDJAREB</Typography> */}
        </Box>
      </Link>
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
        <Link
          to="/categories"
          sx={{ minWidth: 100 }}
          className={classes.navItem}
        >
          Categories
        </Link>
        <Link
          to="/community"
          sx={{ minWidth: 100 }}
          className={classes.navItem}
        >
          Community
        </Link>
        <Link
          to="/businesses"
          sx={{ minWidth: 100 }}
          className={classes.navItem}
        >
          For Businesses
        </Link>
        <Link to="/signin" sx={{ minWidth: 100 }} className={classes.navItem}>
          LogIn
        </Link>
      </Box>
      <Box className={classes.burgerMenu}>
        <MenuIcon onClick={() => setMenu(!menu)} />
      </Box>
      {menu ? <BurgerMenu /> : null}
    </Box>
  );
};

export default Navigation;
