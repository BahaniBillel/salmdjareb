import React from 'react';
import { Box, Container } from '@material-ui/core';
import Banner from '../components/Banner';

import JoinCommunity from '../components/JoinCommunity';
import CallToAction from '../components/CallToAction';
import CategoryShow from '../components/CategoryShow';

import HomeSlides from '../components/HomeSlides';
import HomeWhoAreWe from '../components/HomeWhoAreWe';
import HomeFeaures from '../components/HomeFeatures';

const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeFeaures />
      <CategoryShow />
      <HomeWhoAreWe />
  
      <HomeSlides />
      <CallToAction />
      <JoinCommunity />
    </Box>
  );
};

export default Home;
