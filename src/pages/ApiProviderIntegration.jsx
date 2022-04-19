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
import ApiBannerPage from '../images/api_bannerpage.jpg';

const useStyles = makeStyles((theme) => ({
  apiprovider: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  pageBanner: {
    height: '35vh',
    width: '100%',
  },
}));

const ApiProviderIntegration = () => {
  const classes = useStyles();
  return (
    <Box className={classes.apiprovider}>
      <Box className={classes.pageBanner}>
        <img src={ApiBannerPage} alt="/" style={{ objectFit: 'cover' }} />
      </Box>
      <Container className={classes.apiproviderDetail}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        ducimus inventore natus dolorum voluptatem dicta. Rem, iste! Ducimus,
        sint! Nobis architecto pariatur suscipit, doloribus modi reprehenderit
        iure ex sint minima?
      </Container>
    </Box>
  );
};

export default ApiProviderIntegration;
