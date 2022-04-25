import React from 'react';
import { Box, Container } from '@material-ui/core';
import Banner from '../components/Banner';

import WhyReviews from '../components/WhyReviews';
import JoinCommunity from '../components/JoinCommunity';
import CallToAction from '../components/CallToAction';
import CategoryShow from '../components/CategoryShow';
import ConnectVendorsWithBuyers from '../components/ConnectVendorsWithBuyers';
import HomeSlides from '../components/HomeSlides';
import HomeProduct from '../components/HomeProduct';
import Trust from '../images/trust.jpg';
import Pattern from '../images/showcase.svg';

const Home = () => {
  return (
    <Box>
      <Banner />
      <CategoryShow />
      <HomeProduct
        title={'Trust.'}
        text1={
          '  Reviews help consumers buy with confidence - and 93% of online shoppers say they impact their purchase decisions.'
        }
        text2={
          ' Boost your brand’s conversion with trust signals at every point of contact.'
        }
        text3={
          'SAL-MADJAREB helped us build trust with customers, which has had a positive impact on customer satisfaction and conversion.'
        }
        SMtitle1={'  Product reviews'}
        SMtitle2={'  Product insights'}
        SMtitle3={' Smarter collection'}
        box1={
          ' See greater conversion with product review throughout the buyer journey. The more feedback you collect, the greater the SEO benefits.'
        }
        box2={
          'Enhance the shopping experience and help customers choose the right products for their needs with Reviewer attributes'
        }
        box3={
          'Set predefined sending conditions and get more reviews with our Flow collection tool. Use SMS invites to follow up, and boost review conversion by an average of 22%.'
        }
        bkg1={'rgb(131,70,119)'}
        bkg2={
          'linear-gradient(286deg, rgba(131,70,119,1) 0%, rgba(249,86,79,1) 71%, rgba(230,230,230,1) 100%)'
        }
        backColor={'#fcc8c2'}
        bigImg={Trust}
        SMimg={Pattern}
      />
      <ConnectVendorsWithBuyers />
      <WhyReviews />
      <HomeProduct
        title={'Advocacy.'}
        text1={
          '  Reviews help consumers buy with confidence - and 93% of online shoppers say they impact their purchase decisions.'
        }
        text2={
          ' Boost your brand’s conversion with trust signals at every point of contact.'
        }
        text3={
          'SAL-MADJAREB helped us build trust with customers, which has had a positive impact on customer satisfaction and conversion.'
        }
        SMtitle1={'  Product reviews'}
        SMtitle2={'  Product insights'}
        SMtitle3={' Smarter collection'}
        box1={
          ' See greater conversion with product review throughout the buyer journey. The more feedback you collect, the greater the SEO benefits.'
        }
        box2={
          'Enhance the shopping experience and help customers choose the right products for their needs with Reviewer attributes'
        }
        box3={
          'Set predefined sending conditions and get more reviews with our Flow collection tool. Use SMS invites to follow up, and boost review conversion by an average of 22%.'
        }
        bkg1={'rgb(121,210,32)'}
        bkg2={
          'linear-gradient(90deg, rgba(121,210,32,1) 0%, rgba(73,222,210,1) 42%, rgba(11,244,233,1) 68%, rgba(0,212,255,1) 100%)'
        }
        backColor={
          'linear-gradient(90deg, rgba(224,251,32,1) 0%, rgba(223,227,51,1) 30%, rgba(212,223,68,1) 42%, rgba(252,255,105,1) 58%, rgba(238,255,65,1) 68%, rgba(218,225,58,1) 85%, rgba(255,239,0,1) 100%)'
        }
        bigImg={Trust}
        SMimg={Pattern}
      />
      <CallToAction />
      <JoinCommunity />
      <HomeSlides />
    </Box>
  );
};

export default Home;
