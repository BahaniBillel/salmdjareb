import React, { useState } from 'react';
import Logo from '../images/logoH.png';
import { Link } from 'react-router-dom';
import {
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '2rem',
    height: 'auto',
    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(286deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  innerFooter: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container className={classes.innerFooter}>
        <Link to="/">
          <Box className={classes.logoBox}>
            <img src={Logo} alt="sal mdjareb logo" className={classes.logo} />
          </Box>
        </Link>
        <Box className={classes.thirdBox}>
          <Typography variant="h5" component="div">
            About
          </Typography>
          <List style={{ color: '#ccc' }}>
            <ListItem>
              <ListItemText>About us</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Contact</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Blog</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>How does it work?</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.thirdBox}>
          <Typography variant="h5" component="div">
            Community
          </Typography>

          <List style={{ color: '#ccc' }}>
            <ListItem>
              <ListItemText>Experts</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Leader opinion</ListItemText>
            </ListItem>
            <ListItem>
              <Link to="/login">
                <ListItemText>LogIn</ListItemText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/signup">
                <ListItemText>SignUp</ListItemText>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.thirdBox}>
          <Typography variant="h5" component="div">
            Follow us on:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon style={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemIcon>
                <LinkedInIcon style={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemIcon>
                <InstagramIcon style={{ color: '#ccc' }} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Container>
      <Container style={{ height: '80px', padding: '2rem' }}>
        <Typography
          variant="caption"
          component="div"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ccc',
          }}
        >
          <CopyrightIcon /> 2022 SALMJAREB.LTD, ALL RIGHTS RESERVED
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
