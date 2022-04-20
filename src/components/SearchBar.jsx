import React, { useState } from 'react';
import { makeStyles, Box, TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './SearchBar.css';

const useStyles = makeStyles((theme) => ({
  searchInput: {
    backgroundColor: 'rgba(255,255,255,.8)',
    marginTop: '.5rem',
    borderRadius: '4px',
    width: '',
  },
}));

const SearchBar = ({ data, placeholder }) => {
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const HandleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.company.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Box className={classes.search}>
      <TextField
        id="standard-search"
        label="Search for a company or category"
        type="search"
        variant="outlined"
        fullWidth
        className={classes.searchInput}
        value={wordEntered}
        onChange={HandleFilter}
      />
      <Box>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.company} </p>
                </a>
              );
            })}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;
