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
import OrganicSearch from '../components/OrganicSearch';
import ReviewsRatings from '../components/ReviewsRatings';
import Showcase from '../components/Showcase';
import Benchmark from '../components/Benchmark';
import Expert from '../components/Expert';
import Survey from '../components/Survey';

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
      flexFlow: 'column nowrap',
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
    [theme.breakpoints.down('sm')]: {
      jjustifyContent: 'center',
      alignItems: 'center',
      marginLeft: '0',
      width: '100%',
    },
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {},
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
  const [analytics, setAnalytics] = useState(false);
  const [organic, setOrganic] = useState(false);
  const [reviewsRatings, setReviewsRatings] = useState(false);
  const [benchmark, setBenchmark] = useState(false);
  const [expert, setExpert] = useState(false);
  const [survey, setSurvey] = useState(false);
  const [showcase, setShowcase] = useState(false);

  const ShowServiceReview = () => {
    setReviewService(true);
    setReviewProduct(false);
    setReviewInsights(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setShowcase(false)
  };

  const ShowProductReview = () => {
    setReviewProduct(true);
    setReviewService(false);
    setReviewInsights(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  
  };

  const ShowInsights = () => {
    setReviewInsights(true);
    setReviewProduct(false);
    setReviewService(false);
    setPriceplan(false);
    setWebIntegration(false);
    setApicard(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };

  const ShowPricePlan = () => {
    setPriceplan(true);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setWebIntegration(false);
    setApicard(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };

  const ShowWebsiteIntegration = () => {
    setWebIntegration(true);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setApicard(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };

  const ShowApi = () => {
    setApicard(true);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setAnalytics(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };

  const ShowAnalytics = () => {
    setAnalytics(true);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setOrganic(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };

  const ShowOrganicSearch = () => {
    setOrganic(true);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setReviewsRatings(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };
  const ShowReviewsRatings = () => {
    setReviewsRatings(true)
    setOrganic(false);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setBenchmark(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };
  const ShowBenchmark = () => {
    setBenchmark(true)
    setReviewsRatings(false)
    setOrganic(false);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setExpert(false);
    setSurvey(false);
    setShowcase(false)
  };
  const ShowExpert = () => {
    setExpert(true)
    setBenchmark(false)
    setReviewsRatings(false)
    setOrganic(false);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setSurvey(false);
    setShowcase(false)
  };
  const ShowSurvey = () => {
    setSurvey(true)
    setBenchmark(false)
    setReviewsRatings(false)
    setOrganic(false);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setExpert(false)
    setShowcase(false)
  };

  const ShowShowcase = () => {
    setShowcase(true)
    setSurvey(false)
    setBenchmark(false)
    setReviewsRatings(false)
    setOrganic(false);
    setAnalytics(false);
    setApicard(false);
    setWebIntegration(false);
    setPriceplan(false);
    setReviewInsights(false);
    setReviewProduct(false);
    setReviewService(false);
    setExpert(false)
  };


  return (
    <Box className={classes.dashboard}>
      <Box>
        <Drawer
          serviceReview={ShowServiceReview}
          productReview={ShowProductReview}
          insightReview={ShowInsights}
          upgrade={ShowPricePlan}
          websiteIntegration={ShowWebsiteIntegration}
          api={ShowApi}
          analytics={ShowAnalytics}
          organicsearch={ShowOrganicSearch}
          reviewsratings={ShowReviewsRatings}
          benchmark={ShowBenchmark}
          expert={ShowExpert}
          survey={ShowSurvey}
          showcase={ShowShowcase}
        />
      </Box>

      <Box className={classes.detail}>
        <DashBoardDetailHeader title={'Business X'} upgrade={ShowPricePlan} />

        {analytics ? <Analytics /> : null}
        {webIntegration ? <Integrations /> : null}
        {apicard ? <ApiCards /> : null}
        {reviewService ? <Tabs /> : null}
        {reviewProduct ? <ProductReviews /> : null}
        {reviewInsights ?  <Insights /> : null}
        {priceplan ? <PricingPlan /> : null}
        {organic ? <OrganicSearch /> : null}
        {reviewsRatings ?  <ReviewsRatings/>:null}
        {showcase ?  <Showcase/> :null}
        {benchmark ?  <Benchmark/> :null}
        {expert ?  <Expert/> :null}
        {survey ?  <Survey/> :null}





       
      </Box>
    </Box>
  );
};

export default Dashboard;
