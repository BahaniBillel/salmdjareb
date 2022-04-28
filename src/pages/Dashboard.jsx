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
import Tabs from '../components/Tabs';
import Integrations from '../components/Integrations';
import ApiCards from '../components/ApiCards';

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
  const [priceplan, setPriceplan] = useState(false);
  const [webIntegration, setWebIntegration] = useState(false);
  const [apicard, setApicard] = useState(false);

  const ShowServiceReview = () => {
    setReviewService(true);
    setReviewProduct(false);
    setReviewInsights(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
  };

  const ShowProductReview = () => {
    setReviewProduct(true);
    setReviewService(false);
    setReviewInsights(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
  };

  const ShowInsights = () => {
    setReviewInsights(true);
    setReviewProduct(false);
    setReviewService(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
  };

  const ShowPricePlan = () => {
    setPriceplan(true);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setWebIntegration(false);
    setApicard(false);
  };

  const ShowWebsiteIntegration = () => {
    setWebIntegration(true);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setApicard(false);
  };

  const ShowApi = () => {
    setApicard(true);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
  };
  return (
    <Box className={classes.dashboard}>
      <Drawer
        serviceReview={ShowServiceReview}
        productReview={ShowProductReview}
        insightReview={ShowInsights}
        upgrade={ShowPricePlan}
        websiteIntegration={ShowWebsiteIntegration}
        api={ShowApi}
      />

      <Box className={classes.detail}>
        <DashBoardDetailHeader title={'Business X'} />

        {webIntegration ? <Integrations /> : null}
        {apicard ? <ApiCards /> : null}
        {reviewService ? <Tabs /> : null}
        {reviewProduct ? <ProductReviews /> : null}
        {reviewInsights ? <ReviewInsights /> : null}
        {priceplan ? <PricingPlan /> : null}
        {/* <ServicesReviews /> */}

        {/* <Analytics /> */}

        {/* <Insights /> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
