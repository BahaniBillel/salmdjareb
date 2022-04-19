import  React, {useState} from "react";
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
  TextField
} from "@material-ui/core";

import { Link } from "react-router-dom";
import ActivitieZData from '../components/Data';

const useStyles = makeStyles((theme) => ({
    searchInput: {
        backgroundColor: 'rgba(255,255,255,.8)',
        marginTop: '.5rem',
        borderRadius: '4px',
        width: '',
      },
}));

const { Data } = ActivitieZData();



const SearchBar = ({data,placeholder}) => {
  const classes = useStyles();
const [filteredData,setFilteredData]= useState([])
const [wordEntered,setWordEntered]= useState("")

const HandleFilter =(e)=>{
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter=data.filter((value)=>{
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
}

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
            {Data.map(main=>{
                main.subCat.map(item=>{
                   item.businesses.map(company=>{
                       <li>{company.businessname}</li>
                   })
                })
            })}
        </Box>
    </Box>
  )
}

export default SearchBar