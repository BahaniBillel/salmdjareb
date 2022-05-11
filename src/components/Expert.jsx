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
  expert: {
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

const Expert = () => {
  const classes = useStyles();
  return (
    <Box className={classes.expert}>
      <Typography variant="body1" component="div" className={classes.explain}>
        This service provides an opportunity for businesses needs an outside and
        experience eye to issues related to their respective businesses. 
      </Typography>
    </Box>
  );
};

export default Expert;
