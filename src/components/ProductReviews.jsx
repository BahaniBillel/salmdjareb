import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SelectButtonBar from './SelectButtonBar';
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

import ReadRating from './ReadRating';
import ReadTextRating from './ReadTextRating';
import Tooltip from '@mui/material/Tooltip';
import Product01  from '../images/join01.jpg';

const useStyles = makeStyles((theme) => ({
  widget: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // padding: '2rem 6rem',
  },
}));

const ProductReviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.widget}>
      <SelectButtonBar />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          // backgroundColor: 'beige',
          padding: '2rem 0',
        }}
      >
        <EmbededProduct />
        <EmbededProduct />
      </Box>
    </div>
  );
};

export default ProductReviews;

const EmbededProduct = () => {
  return (
    <Box
      style={{
        borderRadius: '4px',
        backgroundColor: '#fff',
        width: '80%',
        height: '250px',
        padding: '1rem',
        marginBottom: '1rem',
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
      }}
    >
      <CardMedia component='img' image={Product01} style={{width:"180px", padding:".5rem", border:"#ccc solid 1px"}}/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit
      maiores omnis, fugit necessitatibus itaque odit a modi deleniti laborum
      enim debitis repellat rerum. Repudiandae itaque ex ad ea tempora!
    </Box>
  );
};
