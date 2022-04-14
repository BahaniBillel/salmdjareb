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
    position: 'relative',
    height: '70%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  bannerImage: {
    height: '40%',
    width: '100%',

    padding: '0',
    // backgroundColor: 'red',
    backgroundPosition: 'center',
    // overflow: 'hidden',
    position: 'relative',
    // background:`url(${BannerImage})`
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
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
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  contentBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    padding: '2.5rem',
    width: 'auto',
    maxWidth: '80vw',
    maxHeight: '50vh',
    backgroundColor: '#fff',
    zIndex: '20',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      height: '220px',
      opacity: '.9',
      maxWidth: '70vw',
      left: '50%',
      top: '70%',
      transform: 'translateX(-50%)',

      // backgroundColor: 'yellow',
      margin: '0',
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
        <Box className={classes.contentBox}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
