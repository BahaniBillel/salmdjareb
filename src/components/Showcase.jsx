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
  showcase: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  explain:{
      padding:'2rem',
      width:"60%",
      textAlign:"center",
      fontSize:"1.7rem",
      lineHeight:"1,5",
      fontWeight:'300',
      border:"solid 1px beige",
      borderRadius:'4px',
      backgroundColor:"#fff",
  }
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <Box className={classes.showcase}>
      <Typography variant='body1' component='div' className={classes.explain}>
       This service offers busineses multiple ways to share and showcase their business’s
        reviews, TrustScore, and Star ratings. Displaying them shows that businesses are 
        open to feedback and can lead to more reviews from both current and
        potential customers.
      </Typography>
    </Box>
  );
};

export default Showcase;
