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
  survey: {
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

const Survey = () => {
  const classes = useStyles();
  return (
    <Box className={classes.survey}>
      <Typography variant="body1" component="div" className={classes.explain}>
        Runing surveys on SAL MAJDAREB platform can provide businesses with precisous
        data about any subject related to their business,it would help them to
        gain information and insights into various topics of interest.
      </Typography>
    </Box>
  );
};

export default Survey;
