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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
      width: '100%',
      height: '20vh',
      postion: 'relative',
      overflow: 'visible',
      zIndex: '100',
    },
  },
  InnerSideMenu: {
    // backgroundColor: "#fff",
    borderRadius: '5px',
    padding: '1rem 0',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '20vh',
      width: '80%',
      height: '100vh',
      backgroundColor: '#fff',
      transition: ' all 500ms ease-out',
      // transform: 'translateX(-120%)',
    },
  },

  slideDrawer: {
    // backgroundColor: "#fff",
    borderRadius: '5px',
    padding: '1rem 0',
    overflow: 'hidden',
    transition: ' all 500ms ease-out',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '20vh',
      width: '80%',
      height: '100vh',
      backgroundColor: '#fff',
      // transform: 'translateX(0%)',
    },
  },

  logoBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  },
  menuBox: {
    display: 'none',

    '& svg': {
      fontSize: '2.5rem',
      color: '#f9564f',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      cursor: 'pointer',
    },
  },
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

  const [drawer, setDrawer] = useState(false);
  const [slideMenu, setSlideMenu] = useState('translateX(-120%)');

  const OpenDrawer = () => {
    setDrawer(!drawer);
    setSlideMenu('translateX(0%)');
  };

  const CloseDrawer = () => {
    setDrawer(false);
    setSlideMenu('translateX(-120%)');
  };
  const ClosingItem = () => {
    setDrawer(false);
    setSlideMenu('translateX(-120%)');
  };

  return (
    <Box className={classes.sidemenu}>
      <CssBaseline />

      <Container
        className={drawer ? classes.slideDrawer : classes.InnerSideMenu}
        style={{ transform: `${slideMenu}` }}
      >
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
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
              onClick={serviceReview}
            >
              Service reviews
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
              onClick={productReview}
            >
              Product reviews
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
              onClick={insightReview}
            >
              Review Insights
            </ListItem>
          </Box>
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
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Overview
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Reviews ratings
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Organic reach
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Replies
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Benchmark
            </ListItem>
          </Box>
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
              <Box onClick={ClosingItem}>Integrations</Box>
            </Button>
          </AccordionSummary>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
              onClick={websiteIntegration}
            >
              Website
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
              onClick={api}
            >
              Popular API
            </ListItem>
          </Box>
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
              <Box onClick={ClosingItem}>Request</Box>
            </Button>
          </AccordionSummary>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Expert
            </ListItem>
          </Box>
          <Box onClick={ClosingItem}>
            <ListItem
              style={{ cursor: 'pointer', color: '#ccc', fontWeight: '300' }}
            >
              Survey
            </ListItem>
          </Box>
        </Accordion>
        <Box onClick={ClosingItem}>
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
        </Box>
      </Container>

      <Box className={classes.logoBox}>
        <Link to="/">
          <img src={Logo} style={{ width: '160px' }} />
        </Link>
        <Box className={classes.menuBox}>
          {drawer ? (
            <CloseIcon onClick={CloseDrawer} />
          ) : (
            <MenuIcon onClick={() => setDrawer(OpenDrawer)} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
