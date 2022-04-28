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
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3rem',
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
    <Box className={classes.connect}>
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
          We connect buyers and vendors <br /> with the most trusted content.
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.mainText}
        >
          We believe truth should drive every business decision. Our reviews
          empower buyers to make informed decisions, but they are also a
          goldmine for vendors who want to authentically engage prospects on
          TrustRadius and beyond. That is why we built our business on quality
          and trust, not selling leads or trading on brands. Whether you're a
          buyer or a vendor, you know we have your back.
        </Typography>
      </Box>
    </Box>
  );
};

export default ConnectVendorsWithBuyers;
