import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

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
} from '@material-ui/core';
import Rating from '../components/Rating';

const useStyles = makeStyles((theme) => ({
  widget: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 6rem',
  },
  top: {
    width: '100%',
  },
  selectButtons: {
    float: 'right',
  },
  bottom: {
    width: '100%',
    height: '90%',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  rectangle: {
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',

    width: '380px',
    height: '650px',
    borderradius: '4px',
    backgroundColor: '#fff',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  performance: {
    display: 'flex',
    '& svg': {
      color: 'gray',
    },
  },
}));

const ServicesReviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.widget}>
      <Box className={classes.top}>
        <ButtonGroup className={classes.selectButtons}>
          <Button variant="contained">Weekly</Button>
          <Button variant="contained">Monthly</Button>
          <Button variant="contained">Annually</Button>
        </ButtonGroup>
      </Box>

      <Box className={classes.bottom}>
        <Box className={classes.rectangle}>
          <Box className={classes.performance}>
            <Typography variant="h6" component="div" color="gray">
              Overall performance
            </Typography>
            <HelpOutlineOutlinedIcon />
          </Box>

          <Box>
            <Rating />
          </Box>
          <Typography variant="caption" component="div">
            Based on 5260 reviews
          </Typography>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '2rem 4rem',
              marginTop: '4rem',
            }}
          >
            <Typography
              variant="body1"
              component="div"
              color="gray"
              gutterBottom
            >
              SAL MDJAREB SCORE
            </Typography>
            <Typography variant="h4" component="div" color="gray">
              4.5 out 5
            </Typography>
          </Box>
        </Box>

        <Box className={classes.rectangle}>
          <Typography variant="h6" component="div" gutterBottom>
            Overall performance
          </Typography>
          <HelpOutlineOutlinedIcon />
        </Box>
        <Box className={classes.rectangle}>
          <Typography variant="h6" component="div">
            Overall performance
          </Typography>
          <HelpOutlineOutlinedIcon />
        </Box>
      </Box>
    </div>
  );
};

export default ServicesReviews;
