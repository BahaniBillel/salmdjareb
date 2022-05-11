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
import OrganicSearchImage from '../images/organicSearch.png';

const useStyles = makeStyles((theme) => ({
  organicsearch: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const OrganicSearch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.organicsearch}>
      <img src={OrganicSearchImage} alt="" />
    </Box>
  );
};

export default OrganicSearch;
