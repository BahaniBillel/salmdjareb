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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

const Quote = ({ fontsize, rotate, color }) => {
  const classes = useStyles();
  return (
    <Box component="span">
      <FormatQuoteIcon
        style={{
          fontSize: `${fontsize}rem`,
          transform: `rotate(${rotate}deg)`,
          color: `${color}`,
        }}
      />
    </Box>
  );
};

export default Quote;
