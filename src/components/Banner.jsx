import React from 'react';
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import BannerImage from '../images/pair-brown-shoes.jpg';
import CategoryShow from '../components/CategoryShow';

const useStyles = makeStyles((theme) => ({
  banner: {
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    height: 'auto',
    width: '70%',
    padding: '0',
    backgroundColor: 'red',
    backgroundPosition: 'center',
    overflow: 'hidden',
    // background:`url(${BannerImage})`
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'scale-down',
  },
  mainText: {
    // color: '#00695c',
    // textTransform: 'uppercase',
    fontSize: '2rem',
    // fontWeight: '600',
    wordSpacing: '.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subText: {
    color: '#424242',
    marginTop: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '.5rem',
    },
  },

  categoriesBanner: {
    width: '30%',
    height: '100%',
  },
  contentBox: {
    position: 'absolute',
    bottom: '-5%',
    marginLeft: '10rem',
    padding: '1.5rem',
    width: 'auto',
    maxWidth:"40vw",
    // maxWidth: '50vw',
    maxHeight: '50vh',
    backgroundColor: '#fff',
    zIndex: '20',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      // backgroundColor:"yellow",
      margin: '0',
      // marginLeft: '.5rem',
      bottom: '20%',
    },
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,.8)',
    marginTop: '.5rem',
    borderRadius: '5px',
    width: '',
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Box maxWidth="xl" className={classes.bannerImage}>
        <img src={BannerImage} alt="banner" className={classes.img} />
        <Container className={classes.contentBox}>
          <Typography
            component="h1"
            variant="h1"
            className={classes.mainText}
            gutterBottom
            style={{ color: '#00695c', fontWeight: '500' }}
          >
            Share your experience.
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            className={classes.mainText}
            gutterBottom
            color="success"
          >
            Connect with your company.
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            className={classes.mainText}
            gutterBottom
          >
            Help improve the quality.
          </Typography>
         
          <Typography
            component="p"
            variant="subtitle2"
            className={classes.subText}
            gutterBottom
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
      </Box>
      <Box className={classes.categoriesBanner}>
        <CategoryShow />
      </Box>
    </Box>
  );
};

export default Banner;
