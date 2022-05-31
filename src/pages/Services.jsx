import React from 'react';
import { Box, makeStyles, Container, Typography } from '@material-ui/core';
import SelectSearchBar from '../components/SelectSearchBar';
import CustomerReview from '../images/customerReview.jpg';
import CompaniezData from '../Donnes.json';
import SearchBar from '../components/SearchBar';
import PricingPlan from '../components/PricingPlan';
import ServiceItem from '../components/ServiceItem';

const useStyles = makeStyles((theme) => ({
  services: {
    padding: '10rem 0',
    [theme.breakpoints.down('sm')]: {},
  },
  itemzWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10rem',
  },
  itemzdetail: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.services}>
        <PricingPlan />
        <Box className={classes.itemzWrapper}>
          <Typography
            variant="h1"
            component={'div'}
            style={{
              width: '70%',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: '5rem',
              padding: '6rem 0',
              borderTop: '1px solid #ccc',
            }}
          >
            Find more about our services
          </Typography>
          <Box className={classes.itemzdetail}>
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
