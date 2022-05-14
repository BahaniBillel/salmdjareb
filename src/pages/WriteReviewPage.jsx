import React from "react";
import {
  Box,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import SelectSearchBar from "../components/SelectSearchBar";
import CustomerReview from '../images/customerReview.jpg';
import CompaniezData from '../Donnes.json';
import SearchBar from "../components/SearchBar";


const useStyles = makeStyles((theme) => ({
  writereview: {
    height: "100vh",

    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    [theme.breakpoints.down("sm")]: {},
  },

  contentBox:{
    width:"70%",
    
  },
  imageBox:{
    width:"30%",
    height:"60%",
    background:`url(${CustomerReview}) top/cover`,
    backgroundRepeat:"no-repeat",
    
  }
 
}));





const WriteReviewPage = () => {
  const classes = useStyles();


  return (
    <Box style={{    backgroundColor:"#fff",}}>
      <Container className={classes.writereview}>
        <Box className={classes.contentBox}>

        <Typography variant="h2" gutterBottom>
          Find a business to review
        </Typography>
        <Typography gutterBottom>
          Review anything from your favorite patio spot to your local flwershop.
        </Typography>
      <SearchBar/>
        </Box>
        <Box className={classes.imageBox}>

        </Box>
      </Container>
    </Box>
  );
};

export default WriteReviewPage;
