import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import LineChart from '../components/LineChart';

import {
  Container,
  makeStyles,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  servicesReviews: {
    width: '100%',
    height: 'max-content',
    backgroundColor: '#fff',
  },
}));

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ServicesReviews = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '1rem' }}>
      <Masonry columns={4} spacing={2}>
        <Item>
          <LineChart />
        </Item>
        <Item>
          <LineChart />
        </Item>
        <Item>
          <LineChart />
        </Item>
        <Item>
          <LineChart />
        </Item>
        <Item>
          <LineChart />
        </Item>
        <Item>
          <LineChart />
        </Item>
      </Masonry>
    </Box>
  );
};

export default ServicesReviews;
