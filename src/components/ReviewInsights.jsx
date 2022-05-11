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
  AppBar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InsightsTable from './InsightsTable';
import TimeSelectBar from './TimeSelectBar';
import BasicDateRangePicker from './DateRangePicker';
import SelectButtonBar from './SelectButtonBar';

const useStyles = makeStyles((theme) => ({}));

const ReviewInsights = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviewInsights}>
      {/* <SelectButtonBar /> */}
      <InsightsTable />
    </Box>
  );
};

export default ReviewInsights;
