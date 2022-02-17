import React from "react";
import {
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  searchBox: {
    height: "40vh",
    width: "40%",
    maxWidth: "40vw",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SearchCategory = () => {
  const classes = useStyles();
  return (
    <Container className={classes.searchBox}>
      <Typography variant="h5" component="h5">
        What are you looking for ?
      </Typography>
      <TextField
        type="search"
        label="Search for an activity or business"
        variant="filled"
        fullWidth
      />
    </Container>
  );
};

export default SearchCategory;
