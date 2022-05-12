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
import ConnectLogo from '../images/link.png';

const useStyles = makeStyles((theme) => ({
  connect: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3rem',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  textContent: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  mainTitle: {
    color: '#f9564f',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.8rem',
    [theme.breakpoints.down('sm')]: {
      // textAlign: 'left',
      padding: ' 0 2rem',
      fontSize: '2.45rem',
    },
  },
  mainText: {
    textAlign: 'center',
    padding: '0 5rem',
    fontSize: '1.2rem',
    lineHeight: '1.95rem',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      padding: '2rem',
      fontSize: '1.245rem',
      lineHeight: '2.3rem',
      textAlign: 'left',
      fontWeight: '300',
    },
  },
}));

const ConnectVendorsWithBuyers = () => {
  const classes = useStyles();
  return (
    <Container className={classes.connect}>
      <Box>
        <img src={ConnectLogo} alt="" style={{ width: '100px' }} />
      </Box>
      <Box className={classes.textContent}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          className={classes.mainTitle}
        >
          We connect Consumers and Businesses <br /> with the most trusted
          content.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.mainText}
        >
          {/* We believe truth should drive every business decision. Our reviews
          empower buyers to make informed decisions, but they are also a
          goldmine for vendors who want to authentically engage prospects on
          TrustRadius and beyond. That is why we built our business on quality
          and trust, not selling leads or trading on brands. Whether you're a
          buyer or a vendor, you know we have your back.  */}
          SAL-MDJAREB will help build a community of trust and credibility
          between the algerian consumers and the local businesses with the aim
          to regain trust in the local offering.
        </Typography>
      </Box>
    </Container>
  );
};

export default ConnectVendorsWithBuyers;
