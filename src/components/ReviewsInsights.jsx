import * as React from "react";
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
  TextField,
  Grid
} from "@material-ui/core";

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import { Link } from "react-router-dom";
import SplitButton from "./SplitButton";

const useStyles = makeStyles((theme) => ({}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ReviewsInsights = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviewInsights}>
      {/* SELECT BUTTONS */}
      <SelectButtons />
      {/* CONTENT  */}
      <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
    </Box>
  );
};

export default ReviewsInsights;


const SelectButtons = () => {
  const [currency, setCurrency] = React.useState("EUR");
  const years = [2019, 2020, 2021, 2022];
  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: ".5rem 3rem",
        width: "100%",
        backgroundColor:"#fff"
      }}
    >
      <Typography variant="h6" color="gray" style={{marginRight:"1rem"}}>
        Period:  
      </Typography>
      <ButtonGroup>
      
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select the year"
          variant="outlined"
          
        >
          {quarters.map((option) => (
            <option key={option.value} value={option.value} >
              {option}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select the year"
          variant="outlined"
        >
          {years.map((option) => (
            <option key={option.value} value={option.value}>
              {option}
            </option>
          ))}
        </TextField>
      </ButtonGroup>
    </Box>
  );
};
