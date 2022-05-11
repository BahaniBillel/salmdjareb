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
  Grid,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import SelectButtonBar from './SelectButtonBar';
import { IndicatorCard } from './Analytics';
import { LineChart } from './LineChart';
import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  insights: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#fff',
  },
  details: {
    // padding: '2rem 10rem',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // width: '100%',
    // height: '100%',
  },
  indicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '25%',
  },
  graphs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    heights: '75%',
    width: '100%',
  },
}));

const Insights = () => {
  const classes = useStyles();
  return (
    <Box className={classes.insights}>
      {/* <SelectButtonBar /> */}

      <Grid
        container
        spacing={2}
        style={{ padding: '5rem' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={3}
        className={classes.details}
      >
        <Grid item xs={4}>
          <IndicatorCard
            title="TOTAL CUSTOMER RATED"
            quarterYear="Q1 2019"
            indicator="78%"
            scoreTitle=" 140+ CUSTOMER RATED"
            fontColor="mediumblue"
            color="#fff"
            marginTop="1rem"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />
        </Grid>
        <Grid item xs={4}>
          <IndicatorCard
            title="TOTAL CUSTOMER RATED"
            quarterYear="Q1 2019"
            indicator="78%"
            scoreTitle=" 140+ CUSTOMER RATED"
            fontColor="mediumblue"
            color="#fff"
            marginTop="1rem"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />
        </Grid>
        <Grid item xs={4}>
          <IndicatorCard
            title="TOTAL CUSTOMER RATED"
            quarterYear="Q1 2019"
            indicator="78%"
            scoreTitle=" 140+ CUSTOMER RATED"
            fontColor="mediumblue"
            color="#fff"
            marginTop="1rem"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />
        </Grid>
        <Grid item xs={8}>
          <LineChart />
        </Grid>
        <Grid item xs={4}>
          <PieChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insights;
