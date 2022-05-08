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
import Aboutbanner from "../components/AboutBanner";

const useStyles = makeStyles((theme) => ({
    about:{
        height:"300vh"
    }
}));




const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Aboutbanner/>
    </Box>
  )
}

export default About