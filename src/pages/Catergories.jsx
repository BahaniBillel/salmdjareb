import React from 'react';
import {Box,Container,makeStyles} from '@material-ui/core';
import CategoryTemplate from '../components/CategoryTemplate';
import SearchCategory from '../components/SearchCategory';






const useStyles=makeStyles({


})



const Catergories = () => {
  const classes =useStyles();

  return (
    <Box className={classes.layout}>
      <SearchCategory/>
      <CategoryTemplate/>
    </Box>
  )
};

export default Catergories;
