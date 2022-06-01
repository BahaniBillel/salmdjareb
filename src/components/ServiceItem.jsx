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


const useStyles = makeStyles((theme) => ({
  serviceItem: {
    width: '330px',
    height: '330px',
    borderRadius: '4px',
    padding: '2.5rem',
    backgroundColor: '#fff',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
    margin: '1rem 0',
  },
  serviceItemHeader: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '1.5rem',
  },
  serviceItemDetail: {
    marginTop: '1rem',
  },
}));

const ServiceItem = ({ title, subTitle, text ,modal}) => {
  const classes = useStyles();


  return (
    <Box className={classes.serviceItem}>
      <Box className={classes.serviceItemHeader} gutterBottom>
        <Typography
          variant="h4"
          component="div"
          style={{ fontWeight: '600' }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body1" component="div">
          {subTitle}
        </Typography>
      </Box>
      <Box className={classes.serviceItemDetail}>
        <Typography
          variant="body1"
          component="div"
          style={{ marginBottom: '2rem' }}
        >
          {text}
        </Typography>

        <Button variant="outlined">
         
          {modal}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceItem;
