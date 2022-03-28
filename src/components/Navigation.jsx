import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from './BurgerMenu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  nav: {
    width: '150px',

    [theme.breakpoints.down('sm')]: {
      padding: '.5rem 2rem',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'auto',
    },
    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(286deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flexShrink: '1',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  logoBox: {
    width: 'auto',
    // marginBottom: 's',
  },
  logo: {
    objectFit: 'cover',
    // height: '70px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
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

  socials: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25vh',
    maxHeight: '20vh',
    '& svg': {
      fontSize: '2.5rem',
      color: '#e0e0e0',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      // flexDirection: 'row',
      // width: '40vw',
    },
  },
  navItem: {
    color: '#ccc',
  },
  burgerMenu: {
    zIndex: 10,
    cursor: 'pointer',
    '& svg': {
      fontSize: '2.5rem',
      color: '#e0e0e0',
    },
    [theme.breakpoints.up('sm')]: {},
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
        </Box>
      </Link>
      <Box
        className={classes.buttons}
        // sx={{ flexGrow: 0.2, display: { xs: 'flex', md: 'none' } }}
      >
        <Box className={classes.burgerMenu}>
          <MenuIcon onClick={() => setMenu(!menu)} />
        </Box>
        <Box className={classes.socials}>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Box>
        {menu ? <BurgerMenu /> : null}
      </Box>
    </Box>
  );
};

export default Navigation;
