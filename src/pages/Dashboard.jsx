import React, { useEffect, useState } from 'react';
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  ListItem,
  Button,
} from '@material-ui/core';
import Drawer from '../components/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { useParams } from 'react-router-dom';
import DashBoardDetailHeader from '../components/DashBoardDetailHeader';
import ServicesReviews from '../components/ServicesReviews';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },

  detail: {
    width: '80%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '#f5f5f5',
    // padding: '1rem',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const params = useParams();
  const pageId = params.id;

  const [reviewService, setReviewService] = useState(false);
  const [title, setTitle] = useState(false);

  const Reviews = ['Service reviews', 'Product  reviews', 'Review Insights'];

  const ShowFigures = () => {
    setReviewService(!reviewService);
    setTitle('title');
  };

  return (
    <Box className={classes.dashboard}>
      <Drawer Click={ShowFigures} />

      <Box className={classes.detail}>
        <DashBoardDetailHeader title={Reviews[0]} />
        {/* {reviewService ? <ServicesReviews /> : null} */}
        <ServicesReviews />
      </Box>
    </Box>
  );
};

export default Dashboard;
