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
  Divider
} from "@material-ui/core";

import { Link } from "react-router-dom";
import ConnectLogo from '../images/link.png';

const useStyles = makeStyles((theme) => ({
    connect:{
        height:"100vh",
        width:'100%',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderTop:"solid 1px #ccc",
        borderBottom:"solid 1px #ccc"
        
    }
}));

const ConnectVendorsWithBuyers = () => {
  const classes = useStyles();
  return (
    <Box className={classes.connect}>
        
      <Box>
        <img src={ConnectLogo} alt="" style={{width:"100px"}}/>
      </Box>
      <Box style={{width:"60%", padding:"2rem"}}>
          <Typography variant="h4" component='div'  style={{color:"#f9564f", textAlign:"center", fontWeight:"600",fontSize:"1.8rem"}} gutterBottom>
          We connect buyers and vendors  <br /> with the most trusted content.
          </Typography>
        <Typography variant="body1" component="div" style={{textAlign:"center",padding:"0 5rem"}}>
          We believe truth should drive every business decision. Our reviews
          empower buyers to make informed decisions, but they are also a
          goldmine for vendors who want to authentically engage prospects on
          TrustRadius and beyond. That is why we built our business on quality
          and trust, not selling leads or trading on brands. Whether you're a
          buyer or a vendor, you know we have your back.
        </Typography>
      </Box>
    </Box>
  );
};

export default ConnectVendorsWithBuyers;
