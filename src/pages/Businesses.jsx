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
import CustomBanner from "../components/CustomBanner";

const useStyles = makeStyles((theme) => ({
  businesses:{
    
  }
}));




const Businesses = () => {
  const classes = useStyles();
  return (
    <Box className={classes.businesses}>
      
       <CustomBanner/>
    </Box>
  )
}

export default Businesses