import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CategoryTemplate from '../components/CategoryTemplate';
import SearchCategory from '../components/SearchCategory';
import Note from '../components/Note';

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
      <Note
        line1={
          "  For the demo purpose ,just one section was completed in all these  categories."
        }
        line2={"Please Check 'Appliance and Electronics' in Electronics and Technology Category. "}
      />
    </Box>
  );
};

export default Catergories;
