import * as React from 'react';
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
} from '@material-ui/core';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Autoplay } from 'swiper';
import 'swiper/css';
import ReadRatingSM from './ReadRatingSM';
import BannerImage from '../images/brush-2.jpg';
// import 'swiper/css/navigation';
// import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const useStyles = makeStyles((theme) => ({
  slideWrapper: {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // background: '#fff',
    // background:
    //   'linear-gradient(90deg, rgba(250,128,114,0.5) 0%, rgba(250,128,114,0.8) 35%, rgba(255,128,114,0.02) 100%)',
    // background: `url(${BannerImage}) top/cover`,
  },
}));

const HomeSlides = () => {
  const classes = useStyles();

  return (
    <Box className={classes.slideWrapper}>
      <Box
        variant="body1"
        component="div"
        gutterBottom
        style={{ fontSize: '2rem', padding: '0 1rem' }}
        fontWeight="600"
        color="rgb(70,128,131)"
      >
        TOP REVIEWS OF THE CURRENT MONTH
      </Box>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{}}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewSlide />
          </SwiperSlide>
          ...
        </Swiper>
      </Container>
    </Box>
  );
};

export default HomeSlides;

const ReviewSlide = () => {
  return (
    <Box
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '1.5rem',
        // background: `url(${BannerImage}) top/cover`,
      }}
    >
      <Box gutterBottom>
        <Typography variant="h6" component="div" gutterBottom>
          Bahani Billel
        </Typography>
        <ReadRatingSM value="4.3" size="small" />
      </Box>
      <Box gutterBottom>
        <Typography
          variant="body2"
          component="div"
          style={{ color: 'green', fontSize: '.8rem' }}
        >
          <VerifiedRoundedIcon
            style={{ color: 'green', fontSize: '.8rem', marginRight: '.5rem' }}
          />
          Verified Customer
        </Typography>
      </Box>
      <Typography
        variant="h6"
        component="div"
        style={{ fontSize: '.9rem', color: '#000', fontWeight: '300' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero
        labore ...
      </Typography>
      <Typography
        variant="caption"
        component="div"
        style={{ color: 'gray', fontWeight: '300' }}
      >
        Blida,Algerie,2 months ago
      </Typography>
    </Box>
  );
};
