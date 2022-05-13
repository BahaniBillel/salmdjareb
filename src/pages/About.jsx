import * as React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
  ButtonGroup,
  Box,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import Aboutbanner from '../components/AboutBanner';
import Salmdjareb from '../components/Salmdjareb';
import ConnectVendorsWithBuyers from '../components/ConnectVendorsWithBuyers';
import Mission from '../components/Mission';
import Benefits from '../components/Benefits';
import Objectives from '../components/Objectives';



const useStyles = makeStyles((theme) => ({
  about: {
    height: 'auto',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Aboutbanner />
      <Salmdjareb />
      <Mission/>
      <ConnectVendorsWithBuyers /> 
      <Benefits/>
      <Objectives/>
    </Box>
  );
};

export default About;
