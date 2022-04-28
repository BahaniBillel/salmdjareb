import React, { useEffect, useState } from 'react';
import Logo from '../images/logoH.png';
import { Box, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    maxHeight: '5vh',
    transition: '1s',
    zIndex: '100',
    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(206deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1rem 0rem',
    overFlow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: '1.8rem 0rem',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
  },
  shrinkNav: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1rem 0',
    backgroundColor: '#fff',
    position: 'fixed',
    maxHeight: '5vh',
    top: '0',
    width: '100%',
    transition: '1s',
    zIndex: '100',
    opacity: 0.6,
  },

  logoBox: {
    '& img': {
      height: '60px',
    },
  },
  logo: {
    transition: '0.4s ease-in',
    height: 'min-content',
  },
  logoOnScroll: {
    // objectFit: 'scale-down',
    height: '50px',
    transition: '.4s ease-in',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#f9564f',
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
      // flexDirection: 'column',
    },
  },

  navItem: {
    color: '#ccc',
  },
  burgerMenu: {
    zIndex: 1000,
    cursor: 'pointer',
    '& svg': {
      fontSize: '2.5rem',
      color: '#f9564f',
    },
    [theme.breakpoints.up('sm')]: {},
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const HandleClick = () => {
    setMenu(!menu);
  };

  const ShrinkNav = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', ShrinkNav);

  // Animating mobile menu

  return (
    <>
      <Box
        sx={{ flexGrow: 0 }}
        // position="static"
        className={nav ? classes.shrinkNav : classes.nav}
        onScroll={ShrinkNav}
      >
        <Link to="/" className={classes.logoBox}>
          <img
            src={Logo}
            alt="sal mdjareb logo"
            className={nav ? classes.logoOnScroll : classes.logo}
          />
        </Link>
        <Box
          className={classes.buttons}
          // sx={{ flexGrow: 0.2, display: { xs: 'flex', md: 'none' } }}
        >
          <Box className={classes.burgerMenu}>
            {menu ? (
              <CloseIcon onClick={() => setMenu(false)} />
            ) : (
              <MenuIcon value={menu} onClick={HandleClick} />
            )}
          </Box>
        </Box>

        {menu ? <MobileMenu CloseMobileMenu={() => setMenu(false)} /> : null}
      </Box>
    </>
  );
};

export default Navigation;
