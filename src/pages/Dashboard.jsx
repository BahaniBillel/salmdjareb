import React, { useEffect, useState } from 'react';
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  ListItem,
  Button,
} from '@material-ui/core';
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return <Box className={classes.dashboard}>this is the dashboard page</Box>;
};

export default Dashboard;
