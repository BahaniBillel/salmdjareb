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
  note: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    left:"0",
    top:"0",
    zIndex:"100000000000000",
    
    backdropFilter:"grayscale(100%) blur(4px)",
},
explain: {
    // backgroundColor: "#fff",
    //   backdropFilter:"grayscale(10%)",
    padding: "2rem",
    width: "50%",
    height:"50%",
    textAlign: "center",
    fontSize: "1.7rem",
    lineHeight: "1,5",
    fontWeight: "300",
    border: "solid 1px beige",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor:"pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
  },
  action:{
    marginTop:"1rem"
  }
}));

const Note = ({line1,line2}) => {
  const classes = useStyles();
  const[note,setNote]=React.useState("block")

  const HandleNote=()=>{
      setNote("none")
  }
  return (
    <Box className={classes.note} onClick={HandleNote} style={{display:note}}>
      <Typography variant="body1" component="div" className={classes.explain}>
      {line1}
      <Typography variant="h4" component="div" className={classes.action}>
      {line2}
      </Typography>
      <Button variant="filled" style={{backgroundColor:"Gold",marginTop:"1rem"}}>Close</Button>
      </Typography>
    </Box>
  );
};

export default Note;
