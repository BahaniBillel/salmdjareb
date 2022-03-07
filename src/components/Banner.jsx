import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import BannerImage from "../images/pair-brown-shoes.jpg";

const useStyles = makeStyles({
  bannerImage: {
    overflow: "hidden",
    // backgroundColor: "red",
    height: "90vh",
    padding: "0",
    backgroundPosition: "center",
    // background:`url(${BannerImage})`
  },
  img: {
    width: "100vw",
    height: "auto",
  },
  mainText: {
    color: "#fff",

    fontSize: "3rem",
    fontWeight: "600",
    wordSpacing: ".1rem",
  },
  subText: {
    color: "#cecece",
    marginTop:'2rem'
  },
  contentBox: {
    position: "absolute",
    top: "25%",
    marginLeft: "3rem",
    padding: "1rem",
    width: "50vw",
  },
  searchInput:{
    backgroundColor:'rgba(255,255,255,.8)',
    marginTop:'.5rem'
    
  }
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="xl" className={classes.bannerImage}>
        <img src={BannerImage} alt="banner" className={classes.img} />
        <Container className={classes.contentBox}>
          <Typography component="h1" variant="h1" className={classes.mainText}>
            {" "}
            Behind every review is an <br /> experience that matters YOU got the re&ason
            there no shame to 
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            className={classes.subText}
          >
            {" "}
            Read reviews.Write Reviews.Find Companies
          </Typography>
          <TextField
            id="standard-search"
            label="Search for a company or category"
            type="search"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.searchInput}
          />
        </Container>
      </Container>
    </Box>
  );
};

export default Banner;
