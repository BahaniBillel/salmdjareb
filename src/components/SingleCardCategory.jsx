import React,{useState} from "react";
import {
  Container,
  makeStyles,
  List,
  ListItemText,
  Box,
  ListItem,
  ListItemIcon,
  CardMedia,
  Card,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import LogoCard from "../images/logo-card.jpg";

const useStyles = makeStyles({
  wrapper: {
    width: "630px",
    height: "160px",
    margin:" 2rem 0",
    cursor:"pointer"
  },
  card:{
      display:"flex",
      flexDirection:"row",
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
          <CardMedia component="img" image={LogoCard} alt="/" />
        </Box>
        <Box className={classes.content}>
          <ListItem>
            <ListItemText primary={companyName} />
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
