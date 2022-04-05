import React, { useEffect, useState } from 'react';
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
} from '@material-ui/core';
import LanguageIcon from '@mui/icons-material/Language';
import CssBaseline from '@mui/material/CssBaseline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Divider from '@mui/material/Divider';
import Logo from '../images/logoH.png';

const useStyles = makeStyles((theme) => ({
  sidemenu: {
    width: '15%',
    height: '100vh',
    padding: '1rem ',
    overflow: 'hidden',
    //   backgroundColor: "#eee",
    background: 'rgb(70,128,131)',
    background:
      'linear-gradient(206deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  InnerSideMenu: {
    // backgroundColor: "#fff",
    borderRadius: '5px',
    padding: '1rem 0',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {},
  },
  accordion: {},
}));

const Drawer = ({ Click }) => {
  const classes = useStyles();

  return (
    <Box className={classes.sidemenu}>
      <CssBaseline />

      <Container className={classes.InnerSideMenu}>
        <Button
          variant="outlined"
          startIcon={<ApartmentOutlinedIcon />}
          style={{ border: 'none', color: '#f9564f', padding: '.5rem 1rem' }}
          gutterBottom
        >
          Business
        </Button>
        <Typography
          variant="body1"
          component="div"
          style={{ color: '#fafafa', padding: ' 1rem' }}
        >
          www.Company.com
        </Typography>

        <Accordion
          className={classes.accordion}
          sx={{ backgroundColor: 'transparent', border: 'none' }}
          elevation={0}
        >
          <AccordionSummary>
            <Button
              variant="outlined"
              startIcon={<HomeOutlinedIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
              href="/"
            >
              Home
            </Button>
          </AccordionSummary>
        </Accordion>

        <Accordion
          className={classes.accordion}
          sx={{ backgroundColor: 'transparent', border: 'none' }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#f9564f' }} />}
          >
            <Button
              variant="outlined"
              startIcon={<ReviewsIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
            >
              Reviews
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <List
              style={{
                textDecoration: 'none,',
                listStyleType: 'none',
                paddingLeft: '1.5rem',
                paddingTop: '0',
                color: '#eee',
                fontWeight: '300',
              }}
            >
              <ListItem style={{ cursor: 'pointer' }} onClick={Click}>
                Service reviews
              </ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Product reviews</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Review Insights</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className={classes.accordion}
          sx={{ backgroundColor: 'transparent', border: 'none' }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#f9564f' }} />}
          >
            <Button
              variant="outlined"
              startIcon={<EqualizerOutlinedIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
            >
              Analytics
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <List
              style={{
                textDecoration: 'none,',
                listStyleType: 'none',
                paddingLeft: '1.5rem',
                paddingTop: '0',
                color: '#eee',
                fontWeight: '300',
              }}
            >
              <ListItem style={{ cursor: 'pointer' }}>Overview</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Reviews ratings</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Organic reach</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Replies</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Benchmark</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className={classes.accordion}
          sx={{ backgroundColor: 'transparent', border: 'none' }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#f9564f' }} />}
          >
            <Button
              variant="outlined"
              startIcon={<IntegrationInstructionsOutlinedIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
            >
              Integrations
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <List
              style={{
                textDecoration: 'none,',
                listStyleType: 'none',
                paddingLeft: '1.5rem',
                paddingTop: '0',
                color: '#eee',
                fontWeight: '300',
              }}
            >
              <ListItem style={{ cursor: 'pointer' }}>Overview</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Website</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>YouTube</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Facebook</ListItem>
              <ListItem style={{ cursor: 'pointer' }}>Instagram</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className={classes.accordion}
          sx={{ backgroundColor: 'transparent', border: 'none' }}
          elevation={0}
        >
          <AccordionSummary>
            <Button
              variant="outlined"
              startIcon={<SettingsOutlinedIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
            >
              Settings
            </Button>
          </AccordionSummary>
        </Accordion>
      </Container>

      <Box>
        <Typography
          variant="body1"
          component="div"
          style={{ color: '#fafafa' }}
          gutterBottom
        >
          Your plan is : Premium+
        </Typography>

        <Typography
          variant="body1"
          component="div"
          style={{ color: '#fafafa' }}
          gutterBottom
        >
          Expiry date: 31/12/2042
        </Typography>
        <Box>
          <img src={Logo} style={{width:"160px"}} />
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
