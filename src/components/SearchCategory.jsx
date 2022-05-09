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

const useStyles = makeStyles((theme) => ({
  searchBox: {
    height: '40vh',
    width: '100%',
    // maxWidth: '40vw',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0',
    },
  },
  headline: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    fontWeight: '600',
    // color: '#ccc',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.9rem',
    },
  },
  searchField: {
    width: '40%',

    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));

const SearchCategory = () => {
  const classes = useStyles();
  return (
    <Box className={classes.searchBox}>
      <Typography variant="h5" component="h5" className={classes.headline}>
        Find the business you are looking for ?
      </Typography>
      <Box className={classes.searchField}>
        <SearchBar data={CompaniezData} />
      </Box>
    </Box>
  );
};

export default SearchCategory;
