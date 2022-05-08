import React, { useState } from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import BannerImage from "../images/board_meeting.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";

const useStyles = makeStyles((theme) => ({
  custombanner: {
    backgroundColor: "#FEE5E0",
    height: "90vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContent: {
    width: "50%",
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
      fontSize: "2rem",
    },
  },
  mainText: {
    fontSize: "4rem",
    fontWeight: "700",
  },
  demoButton: {
    padding: "1rem",
    background: "rgb(70,128,131)",
    color: "#fafafa",
  },
  imageBox: {
    width: "50%",
    height: "100%",
    position: "relative",
    background: `url(${BannerImage}) top/cover`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
    },
  },
  card: {
    width: "240px",
    height: "350px",
    background: "white",
    borderRadius: "4px",
    padding: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const BusinessesBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.custombanner}>
      <Box className={classes.textContent}>
        <Typography variant="h1" component="div" className={classes.mainText}>
          Get the most value from your customer reviews.
        </Typography>
        <Button className={classes.demoButton}>Request demo</Button>
      </Box>
      <Box className={classes.imageBox}>
        <Box
          style={{
            position: "absolute", 
            left: "50%",
            top: "100%",
            transform: "translate(-50%,-50%)",
            width:"100vw"
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change from business")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{}}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <BoxModel
                title="Unlock real-time consumer insights."
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              accusantium quis ducimus eveniet quo? Earum?"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BoxModel
                title={"Never miss an opportunity for feedback."}
                text="Collect customer reviews at key moments in their journey, with robust options for sending review invitations."
              />
            </SwiperSlide>
            <SwiperSlide>
              <BoxModel
                title={"Showcase reviews everywhere."}
                text="Display reviews everywhere you engage with customers to drive conversions and make the buying decision easy."
              />
            </SwiperSlide>
      
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessesBanner;

const BoxModel = ({ title, text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" component="div" gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};
