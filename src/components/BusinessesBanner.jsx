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
    marginBottom: "-5%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContent: {
    width: "50%",
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "70%",
      fontSize: "2rem",
      padding: "3rem 0",
      transform: "translateY(35%)",
    },
  },
  mainText: {
    fontSize: "4rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  demoButton: {
    padding: "1rem",
    background: "rgb(70,128,131)",
    color: "#fafafa",
  },
  imageBox: {
    width: "50%",
    height: "100%",
    background: `url(${BannerImage}) top/cover`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
    },
  },
  card: {
    width: "240px",
    height: "300px",
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
    <Box className={classes.wrapper}>
      <Box className={classes.custombanner}>
        <Box className={classes.textContent}>
          <Typography variant="h1" component="div" className={classes.mainText}>
            Take Advantage of the most value for your customers.
          </Typography>
          <Button className={classes.demoButton}>Request demo</Button>
        </Box>
        <Box className={classes.imageBox}></Box>
      </Box>
      <Box
        style={{
          //  height:"100vh",
          width: "100vw",
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
              title=" Better Understand your Customers & Improve Customer Service."
              text="Analyzing reviews left by your customers, helps your company understand overall customer satisfaction,
               as they can provide your business with feedback regarding what your customers truly want."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={"Credibility & Social Proof."}
              text="studies show that close to 90% of consumers trust online reviews as much as personal recommendations."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={"Fight with experience to save margins."}
              text="Reviews enable new businesses to stand shoulder to shoulder with more established 
              competition, and potentially gain a positive niche in people’s estimation and expectations."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={
                "Allow Consumers to Have a Voice and Create Customer Loyalty."
              }
              text="leaving a review and establishing a relationship with your business, it allows
               consumers to feel like they have a voice even behind a desktop and/or mobile and/ or tablet screen."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={"Improve Rankings."}
              text="Display reviews everywhere you engage with customers to drive conversions and make the buying decision easy."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={"Consumers are Doing your Marketing for You."}
              text="a constant positive image to potential customers and creating a 
              continual brand awareness that benefits the business for both the short and the long term."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={"Reviews impact purchasing decisions."}
              text=" Nearly 70% of consumers are influenced by online reviews. Before buying a product, eating at a new restaurant, 
              or doing business with a company, people read reviews from competitors and take them into consideration."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BoxModel
              title={
                "Reviews facilitate word-of-mouth marketing and referrals."
              }
              text="Word of mouth generally happens over time, after your business has been noticed and you’ve got people talking about you."
            />
          </SwiperSlide>
        </Swiper>
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
