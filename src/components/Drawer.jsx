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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Divider from '@mui/material/Divider';
import Logo from '../images/logoH.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  sidemenu: {
    width: '18%',
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
    position: 'fixed',
    top: '0',
    left: '0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width:"100%",
      height:"10vh"
     
    },
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

const Drawer = ({
  serviceReview,
  productReview,
  insightReview,
  upgrade,
  api,
  websiteIntegration,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.sidemenu}>
      <CssBaseline />

      <Container className={classes.InnerSideMenu}>
        <ListItem>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            style={{
              border: 'none',
              color: '#f9564f',
              padding: '0',
              fontSize: '.8rem',
            }}
            gutterBottom
            href="#"
            onClick={upgrade}
          >
            Plancing plan
          </Button>
        </ListItem>

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

          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            onClick={serviceReview}
          >
            Service reviews
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            onClick={productReview}
          >
            Product reviews
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            onClick={insightReview}
          >
            Review Insights
          </ListItem>
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
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Overview
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Reviews ratings
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Organic reach
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Replies
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Benchmark
          </ListItem>
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
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            onClick={websiteIntegration}
          >
            Website
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            onClick={api}
          >
            Popular API
          </ListItem>
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
              startIcon={<PlaylistAddIcon />}
              style={{ border: 'none', color: '#f9564f', padding: '0' }}
              gutterBottom
            >
              Request
            </Button>
          </AccordionSummary>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Expert
          </ListItem>
          <ListItem
            style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
          >
            Survey
          </ListItem>
        </Accordion>
        <ListItem>
          <Button
            variant="outlined"
            startIcon={<SettingsOutlinedIcon />}
            style={{ border: 'none', color: '#f9564f', padding: '0' }}
            gutterBottom
          >
            Settings
          </Button>
        </ListItem>
      </Container>

      <Box>
        <Typography
          variant="body1"
          component="div"
          style={{ color: '#ccc', fontSize: '.9rem' }}
          gutterBottom
        >
          Your plan is : Basic
        </Typography>

        <Typography
          variant="body1"
          component="div"
          style={{ color: '#ccc', fontSize: '.9rem' }}
          gutterBottom
        >
          Expiry date: 31/12/2024
        </Typography>
        <Button
          style={{
            padding: '.3rem 2rem ',
            borderRadius: '4px',
            backgroundColor: '#f9564f',
            color: '#ccc',
            margin: '.5rem auto',
          }}
          onClick={upgrade}
        >
          Upgrade now
        </Button>

        <Box>
          <Link to="/">
            <img src={Logo} style={{ width: '160px' }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
