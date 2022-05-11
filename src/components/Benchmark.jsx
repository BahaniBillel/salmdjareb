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
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  benchmark: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  explain: {
    padding: "2rem",
    width: "60%",
    textAlign: "center",
    fontSize: "1.7rem",
    lineHeight: "1,5",
    fontWeight: "300",
    border: "solid 1px beige",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
}));

const Benchmark = () => {
  const classes = useStyles();
  return (
    <Box className={classes.benchmark}>
      <Typography variant="body1" component="div" className={classes.explain}>
        The Benchmark service provides a deep analytics tool  that allows you to compare  one business
        side by side with others.
      </Typography>
    </Box>
  );
};

export default Benchmark;
