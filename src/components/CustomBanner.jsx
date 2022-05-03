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
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import HomeSlides from "./HomeSlides";

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
  box: {
    width: "240px",
    height: "350px",
    background: "white",
    borderRadius: "4px",
    position: "absolute",
    padding: "1rem",
    // left: "-40%",
    top: "50%",
    // transform: "translate(50%,-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const CustomBanner = () => {
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
        <Box className={classes.box}>
          <HomeSlides />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomBanner;

const BoxModel = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h6" component="div" gutterBottom>
        Unlock real-time consumer insights.
      </Typography>
      <Typography variant="body2" component="div" gutterBottom>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        accusantium quis ducimus eveniet quo? Earum?
      </Typography>
    </Box>
  );
};
