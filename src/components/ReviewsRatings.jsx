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
import ReviewsRatingsImage from '../images/reviewsRatings.PNG';

const useStyles = makeStyles((theme) => ({
  reviewsratings: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ReviewsRatings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviewsratings}>
      <img src={ReviewsRatingsImage} alt="/" />
    </Box>
  );
};

export default ReviewsRatings;
