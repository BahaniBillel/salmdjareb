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
  Divider,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { boxShadow } from '../siteConfiguration';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { CallToAction } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  pricingplan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem',
  },
}));

const PricingPlan = () => {
  const classes = useStyles();
  const premiumIcon = (
    <WorkspacePremiumIcon style={{ fontSize: '3rem', color: 'gold' }} />
  );
  const closeIcon = (
    <CloseIcon style={{ color: 'red', marginRight: '.5rem' }} />
  );
  const checkIcon = (
    <CheckIcon style={{ color: 'green', marginRight: '.5rem' }} />
  );

  return (
    <Box className={classes.pricingplan}>
      <SinglePlan
        backColor="#fff"
        featureOne={checkIcon}
        featureTwo={checkIcon}
        featureThree={checkIcon}
        featureFour={closeIcon}
        featureFive={closeIcon}
        featureSix={closeIcon}
        CTA="Claim your free account!"
        planType="Basic"
        textOne="Free Account"
        textTwo="Up to 50 reviews "
        textThree="Limited Analysis"
        textFour="No Insights"
        textFive=" No Brand Integration"
        textSix=" No experts Advice"
        price="0"
      />
      <SinglePlan
        scaleZ={1.05}
        icon={premiumIcon}
        backColor="#fff"
        featureOne={checkIcon}
        featureTwo={checkIcon}
        featureThree={checkIcon}
        featureFour={checkIcon}
        featureFive={checkIcon}
        featureSix={closeIcon}
        CTA="Upgrade to premium now!"
        planType="Premium"
        textOne="Free Account"
        textTwo="Up to 1000 reviews "
        textThree="Full Report Analysis"
        textFour="Deep Insights"
        textFive=" Limited Brand Integration"
        textSix=" No experts Advice"
        price="8 999"
      />
      <SinglePlan
        backColor="#fff"
        icon={premiumIcon}
        featureOne={checkIcon}
        featureTwo={checkIcon}
        featureThree={checkIcon}
        featureFour={checkIcon}
        featureFive={checkIcon}
        featureSix={checkIcon}
        CTA="Get Extra premium"
        planType="Premium+"
        textOne="Free Account"
        textTwo="Up to 1000 reviews "
        textThree="Full Report Analysis"
        textFour="Deep Insights"
        textFive=" Limited Brand Integration"
        textSix="  experts Advice"
        price="14 999"
      />
    </Box>
  );
};

export default PricingPlan;

const SinglePlan = ({
  scaleZ,
  backColor,
  icon,
  textColor,
  featureOne,
  featureTwo,
  featureThree,
  featureFour,
  featureFive,
  featureSix,
  CTA,
  planType,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  textSix,
  price,
}) => {
  const classes = useStyles();
  return (
    <Box
      style={{
        width: '23%',
        height: '80vh',
        borderRadius: '4px',
        backgroundColor: `${backColor}`,
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        padding: '2rem',
        transform: `scaleY(${scaleZ})`,
        color: `${textColor}`,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        style={{ color: '#616161' }}
      >
        {planType}
        {icon}
      </Typography>
      <Typography
        variant="body2"
        component="div"
        gutterBottom
        style={{ color: '#616161' }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
        consectetur!
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        {price} DZD
      </Typography>
      <Typography
        variant="caption"
        component="div"
        gutterBottom
        style={{ color: '#616161' }}
      >
        per month , billed yearly
      </Typography>
      <Button
        style={{
          backgroundColor: '#f9564f',
          padding: '.5rem',
          color: '#fff',
          marginBottom: '2rem',
          width: '80%',
        }}
        gutterBottom
      >
        {CTA}
      </Button>
      <List>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureOne}
          {textOne}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureTwo}
          {textTwo}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureThree}
          {textThree}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureFour}
          {textFour}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureFive}
          {textFive}
        </ListItem>
        <Divider />
        <ListItem style={{ padding: '1.3rem 0' }}>
          {featureSix}
          {textSix}
        </ListItem>
      </List>
    </Box>
  );
};
