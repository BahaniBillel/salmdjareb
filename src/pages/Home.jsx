import React from 'react';
import { Box, Container } from '@material-ui/core';
import Banner from '../components/Banner';
import CategoryShow from '../components/CategoryShow';
import WhyReviews from '../components/WhyReviews';
import JoinCommunity from '../components/JoinCommunity';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <Box>
      <Banner />
      <CategoryShow />
      <WhyReviews />
      <CallToAction />
      <JoinCommunity />
    </Box>
  );
};

export default Home;
