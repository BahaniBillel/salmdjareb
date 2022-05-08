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
import Understanding from '../images/understanding.jpg';
const useStyles = makeStyles((theme) => ({
    aboutbanner:{
        height:'100vh',
        background:`url(${Understanding}) center/cover`,
    },
    content:{
        width:"65%",
        transform:"translate(10%,50%)",
        backgroundColor:"rgba(70,128,131,.5)",
        padding:'1rem',
      
    },
    mainheadline:{
        fontWeight:"700",
        fontSize:"3.2rem",
        lineHeight:"4.5rem",

    }
}));




const Aboutbanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutbanner}>
        <Box className={classes.content}>
            <Typography variant="h3" className={classes.mainheadline} >
                We create a ground of understanding <br/>
                between businesses and consumers <br/>
                for the greater good.<br/>
            </Typography>
        </Box>
    </Box>
  )
}

export default Aboutbanner