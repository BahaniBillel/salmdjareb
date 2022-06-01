import React from 'react';
import { Box, makeStyles, Container, Typography } from '@material-ui/core';
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

const cardContent = [
  {
    id: 1,
    title: 'Convert',
    subTitle: 'Turn more browsers into buyers through showcasing',
    describe:
      'Our full collection of TrustBox widgets allows you to showcase reviews across your website, email and digital marketing',
  },
  {
    id: 2,
    title: 'Invite',
    subTitle:
      'Keep your review content fresh with unlimited automated review invitations',
    describe:
      'Make sure new prospects find fresh and trustworthy reviews about your business to support decision-making.',
  },

  {
    id: 3,
    title: 'Enhance',
    subTitle: 'Strengthen your online presence',
    describe:
      'Curate your Trustpilot Company Profile Page through adding your brand logo and adding authentic content that will enhance your online reputation.',
  },
  {
    id: 4,
    title: 'Enhance',
    subTitle: 'Strengthen your online presence',
    describe:
      'Curate your Trustpilot Company Profile Page through adding your brand logo and adding authentic content that will enhance your online reputation.',
  },
];
const Services = () => {
  const classes = useStyles();

  const HandleClick = () => {
    return;
  };

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
            {cardContent.map((item) => {
              return (
                <ServiceItem
                  key={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  text={item.describe}
                  onClick={HandleClick}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
