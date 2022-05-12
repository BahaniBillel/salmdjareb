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
import Article from '../components/Article';
import ConnectVendorsWithBuyers from '../components/ConnectVendorsWithBuyers';



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
      <Article />
      <ConnectVendorsWithBuyers /> 
    </Box>
  );
};

export default About;
