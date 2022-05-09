import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CategoryTemplate from '../components/CategoryTemplate';
import SearchCategory from '../components/SearchCategory';

const useStyles = makeStyles((theme) => ({
  catergories: {
    // overflow: 'hidden',
  },
}));

const Catergories = () => {
  const classes = useStyles();

  return (
    <Box className={classes.catergories}>
      <SearchCategory />
      <CategoryTemplate />
    </Box>
  );
};

export default Catergories;
