import React from 'react';
import { Box, Container } from '@material-ui/core';
import Banner from '../components/Banner';
import backpack from '../images/backpack.svg';
import WhyReviews from '../components/WhyReviews';
import JoinCommunity from '../components/JoinCommunity';
import CallToAction from '../components/CallToAction';
import CategoryShow from '../components/CategoryShow';
import ConnectVendorsWithBuyers from '../components/ConnectVendorsWithBuyers';

const Home = () => {
  return (
    <Box >
      <Banner />
      <CategoryShow/>
      <ConnectVendorsWithBuyers/>
      <WhyReviews />
      <CallToAction />
      <JoinCommunity />
    </Box>
  );
};

export default Home;
