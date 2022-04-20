import React,{useState} from "react";
import {
  
  makeStyles,

  ListItemText,
  Box,
  ListItem,
  Typography,
  CardMedia,
  Card,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles({
  wrapper: {
    width: "630px",
    height: "180px",
    margin:" 3rem 0",
    cursor:"pointer",
    
  },
  card:{
    display:"flex",
    flexDirection:"row",
    padding:"1rem",
    // marginBottom:"1rem"
  },
  img:{
      width:"20%"
  },
  content:{
      width:"80%",
      
  }
});

const SingleCardCategory = ({ logo, companyName,clickHandler }) => {
  const classes = useStyles();
  const [value,setValue]=useState(0);
  return (
    <Box className={classes.wrapper} onClick={clickHandler}>
      <Card className={classes.card}>
        <Box  className={classes.img}>
          <CardMedia component="img" image={logo} alt="/" />
        </Box>
        <Box className={classes.content}>
          <ListItem>
            {/* <ListItemText primary={companyName} /> */}
            <Typography variant="h6" component='div' style={{marginRight:".5rem"}}>{companyName}</Typography>
            <Rating name="no-value" value={value} onChange={(event,newValue)=>{
                setValue(newValue);
            }} />
          </ListItem>
          <ListItem>
            <ListItemText secondary="2342 reviews" />
            <ListItemText secondary="AverageScore 4.8" />
          </ListItem>
          <ListItem>
            <ListItemText secondary="Toys and Gme Manufacurer" />
            <ListItemText secondary="Game Store" />
            <ListItemText secondary="Gift Shop" />
            <ListItemText secondary="Hobby.." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="Soblanoc . 9234 Soblanov" />
          </ListItem>
        </Box>
      </Card>
    </Box>
  );
};

export default SingleCardCategory;
