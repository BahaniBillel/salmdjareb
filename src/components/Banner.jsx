import React from 'react';
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import BannerImage from '../images/pair-brown-shoes.jpg';

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    overflow: 'hidden',
    marginBottom:"5rem",
    height: '90vh',
    padding: '0',
    backgroundColor:"red",
    backgroundPosition: 'center',
    // background:`url(${BannerImage})`
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  img: {
    width: '100vw',
    height: 'auto',
    // objectFit:'scale-down',
  },
  mainText: {
    color: '#fff',
    textTransform:"uppercase",
    fontSize: '3rem',
    fontWeight: '600',
    wordSpacing: '.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subText: {
    color: '#cecece',
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '.5rem',
    },
  },
  contentBox: {
    position: 'absolute',
    top: '25%',
    marginLeft: '3rem',
    padding: '1rem',
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      // backgroundColor:"yellow",
      margin: '0',
      marginLeft:".5rem",
      top:'20%',
      transform:'translateY(-20%)',
    },
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,.8)',
    marginTop: '.5rem',
    borderRadius:"5px",
    width:''
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="xl" className={classes.bannerImage}>
        <img src={BannerImage} alt="banner" className={classes.img} />
        <Container className={classes.contentBox}>
          <Typography component="h1" variant="h1" className={classes.mainText}>
            {' '}
            Behind every review is an <br /> experience that matters
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            className={classes.subText}
          
          >
            {' '}
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
