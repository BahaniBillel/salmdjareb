import React, { useEffect, useState } from 'react';
import Logo from '../images/logoH.png';
import { Box, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import CloseIcon from '@mui/icons-material/Close';
import set from 'date-fns/set/index';
import NavLinks from './NavLinks';

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
    transition: ' all 500ms ease-out',
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
    background: 'rgba(70,128,131,.8)',
    position: 'fixed',
    maxHeight: '5vh',
    top: '0',
    width: '100%',
    transition: '1s',
    zIndex: '10000000000',
    transition: ' all 500ms ease-out',

    '& a': {
      color: '#fafafa',
    },
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
    // color: '#f9564f',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      // flexDirection: 'column',
    },
  },

  navItem: {
    color: '#ccc',
  },
  burgerMenu: {
    zIndex: 1000,
    cursor: 'pointer',
    display: 'none',
    '& svg': {
      fontSize: '2.5rem',
      color: '#f9564f',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const [slideMenu, setSlideMenu] = useState('translateX(100%)');

  const OpenMenu = () => {
    setMenu(!menu);
    setSlideMenu('translateX(0%)');
  };

  const ShrinkNav = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const HandleCloseMobileMenu = () => {
    setMenu(false);
    setSlideMenu('translateX(100%)');
  };
  window.addEventListener('scroll', ShrinkNav);

  const SelectedLink = () => {
    setSlideMenu('translateX(100%)');
    setMenu(false);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 0 }}
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
        <Box className={classes.buttons}>
          <NavLinks
            link1="About"
            link2={'Products'}
            link3="Categories"
            link4='Blog'
            link5={'Businesses'}
            link6={'Login'}
          />

          <Box className={classes.burgerMenu}>
            {menu ? (
              <CloseIcon onClick={() => setMenu(HandleCloseMobileMenu)} />
            ) : (
              <MenuIcon value={menu} onClick={OpenMenu} />
            )}
          </Box>
        </Box>

        <MobileMenu
           link1="About"
           link2={'Products'}
           link3="Categories"
           link4='Blog'
           link5={'Businesses'}
           link6={'Login'}
          slideX={slideMenu}
          CloseMobileMenu={SelectedLink}
        />
      </Box>
    </>
  );
};

export default Navigation;
