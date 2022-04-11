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
import ProductReviews from '../components/ProductReviews';
import Analytics from '../components/Analytics';
import ReviewInsights from '../components/ReviewInsights';
import Insights from '../components/Insights';
import PricingPlan from '../components/PricingPlan';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh',
    // overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },

  detail: {
    width: '83%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    // padding: '1rem',
    marginLeft: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const params = useParams();
  const pageId = params.id;

  const [reviewService, setReviewService] = useState(false);
  const [reviewProduct, setReviewProduct] = useState(false);
  const [reviewInsights, setReviewInsights] = useState(false);
  const [title, setTitle] = useState(false);

  const Reviews = ['Service reviews', 'Product  reviews', 'Review Insights'];

  const ShowServiceReview = () => {
    setReviewService(true);
    setReviewProduct(false);
    setReviewInsights(false);
    setTitle('title');
  };

  const ShowProductReview = () => {
    setReviewProduct(true);
    setReviewService(false);
    setReviewInsights(false);
    setTitle('title');
  };

  const ShowInsights = () => {
    setReviewInsights(true);
    setReviewProduct(false);
    setReviewService(false);
    setTitle('title');
  };

  return (
    <Box className={classes.dashboard}>
      <Drawer
        serviceReview={ShowServiceReview}
        productReview={ShowProductReview}
        insightReview={ShowInsights}
      />

      <Box className={classes.detail}>
        <DashBoardDetailHeader title={Reviews[0]} />

        {reviewService ? <ServicesReviews /> : null}
        {reviewProduct ? <ProductReviews /> : null}
        {reviewInsights ? <ReviewInsights /> : null}
        {/* <ServicesReviews /> */}
        {/* <ProductReviews /> */}
        {/* <Analytics /> */}
        {/* <ReviewInsights /> */}
        {/* <Insights /> */}
        {/* <PricingPlan /> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
