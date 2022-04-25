import React, { useState } from 'react';
import Photo01 from '../images/qualityGraph.jpg';
import Photo02 from '../images/communityShare.jpg';
import Photo04 from '../images/easyDecision.jpg';
import { Box, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import CardWhy from './CardWhy';

const useStyles = makeStyles((theme) => ({
  whyReviews: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:"10rem",
   
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const WhyReviews = () => {
  const classes = useStyles();
  return (
    <Box className={classes.whyReviews}>
      <Container className={classes.cardWrapper}>
        <CardWhy
          image={Photo01}
          title="This is how you can help improve the quality"
        />
        <CardWhy
          image={Photo02}
          title="Why would your bother yourself to make a review?!!"
        />
        <CardWhy image={Photo04} title="Making it easier for you to decide." />
      </Container>
    </Box>
  );
};

export default WhyReviews;
