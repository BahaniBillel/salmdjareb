import React from 'react';
import {
  Container,
  makeStyles,
  TextField,
  Typography,
  Box,
} from '@material-ui/core';
import SearchBar from './SearchBar';
import CompaniezData from '../Donnes.json';

const useStyles = makeStyles({
  searchBox: {
    height: '40vh',
    width: '100%',
    // maxWidth: '40vw',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SearchCategory = () => {
  const classes = useStyles();
  return (
    <Box className={classes.searchBox}>
      <Typography variant="h5" component="h5">
        What are you looking for ?
      </Typography>
      <Box style={{ width: '40%' }}>
        <SearchBar data={CompaniezData} />
      </Box>
    </Box>
  );
};

export default SearchCategory;
