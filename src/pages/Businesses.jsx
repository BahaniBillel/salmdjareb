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
import BusinessesBanner from '../components/BusinessesBanner';
import BusinessesAnalyze from '../components/BusinessesAnalyze';
import WhyReviews from '../components/WhyReviews';

const useStyles = makeStyles((theme) => ({
  businesses: {},
}));

const Businesses = () => {
  const classes = useStyles();
  return (
    <Box className={classes.businesses}>
      <BusinessesBanner />
      <BusinessesAnalyze />
      <WhyReviews />
    </Box>
  );
};

export default Businesses;
