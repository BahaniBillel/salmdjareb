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
import BusinessesBanner from '../components/BusinessesBanner';
import BusinessesAnalyze from '../components/BusinessesAnalyze';
import WhyReviews from '../components/WhyReviews';
import HomeProduct from '../components/HomeProduct';
import Trust from '../images/trust.jpg';
import ConsumerAdvocate from '../images/consumerAdvocate.jpg';
import Pattern from '../images/showcase.svg';

const useStyles = makeStyles((theme) => ({
  businesses: {
    // overFlow: 'hidden',
  },
}));

const Businesses = () => {
  const classes = useStyles();
  return (
    <Box className={classes.businesses}>
      <BusinessesBanner />
      
      <BusinessesAnalyze />
      <WhyReviews />
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
      <HomeProduct
        title={'Advocacy.'}
        text1={
          '  Customer advocacy is far more powerful than sales led marketing. Use our range of innovative features to amplify the voice of the consumer and take your brand to the next level.'
        }
        text3={
          'SAL-MDJAREB.help us understand who our brand advocates are, shaping and growing our social media campaigns.'
        }
        SMtitle1={'  Collect UGC        '}
        SMtitle2={'  Social proof ads'}
        SMtitle3={' Instagram influencers'}
        box1={
          ' Bring products to life with photo and video reviews reviews from your biggest brand advocates. UGC is easy to collect, and perfect for your social campaigns.'
        }
        box2={
          'Transform review content into branded posts and ads with our user friendly Social Proof editor.'
        }
        box3={
          'Identify and connect with influencers that have engaged with your brand. Leverage their following, and turn Instagram content into shoppable galleries'
        }
        bkg1={'rgb(121,210,32)'}
        bkg2={
          'linear-gradient(90deg, rgba(121,210,32,1) 0%, rgba(73,222,210,1) 42%, rgba(11,244,233,1) 68%, rgba(0,212,255,1) 100%)'
        }
        backColor={
          'linear-gradient(90deg, rgba(224,251,32,1) 0%, rgba(223,227,51,1) 30%, rgba(212,223,68,1) 42%, rgba(252,255,105,1) 58%, rgba(238,255,65,1) 68%, rgba(218,225,58,1) 85%, rgba(255,239,0,1) 100%)'
        }
        bigImg={ConsumerAdvocate}
        SMimg={Pattern}
      />
    </Box>
  );
};

export default Businesses;
