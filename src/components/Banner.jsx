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
  banner: {
    marginBottom: '5rem',
  },
  bannerImage: {
    height: '100vh',
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
    fontSize: '2.5rem',
    // fontWeight: '600',
    wordSpacing: '.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subText: {
    color: '#424242',
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '.5rem',
    },
  },
  contentBox: {
    position: 'absolute',
    bottom: '-10%',
    marginLeft: '10rem',
    padding: '1.5rem',
    width: '32vw',
    // maxWidth: '50vw',
    maxHeight: '50vh',
    backgroundColor: '#fff',
    zIndex: '20',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      // backgroundColor:"yellow",
      margin: '0',
      marginLeft: '.5rem',
      top: '20%',
      transform: 'translateY(-20%)',
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
      <Container maxWidth="xl" className={classes.bannerImage}>
        <img src={BannerImage} alt="banner" className={classes.img} />
      </Container>
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
          variant="p"
          className={classes.subText}
          gutterBottom
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          reiciendis modi ea mollitia officiis consectetur dolor facilis.
          Perferendis consequuntur unde.
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
  );
};

export default Banner;
