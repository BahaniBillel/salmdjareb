import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  ListItem,
  Button,
} from "@material-ui/core";

import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Rating from "@mui/material/Rating";
import Lays from "../images/Lays.png";
import ActivitieZData from "../components/Data";

const useStyles = makeStyles({
  upperWrapper: {
    overflow: "hidden",
  },
  profileHeader: {
    width: "100vw",
    height: "35vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  profile_header_wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  imgBox: {
    width: "20%",
  },
  companyIdentification: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "80%",
    height: "100%",
  },
  companyScoreInfo: {
    marginTop: "2rem",
  },
  visitWebsite: {
    border: "1px solid #eee",
    height: "40px",
    padding: "1rem",
    fontSize: ".8rem",
  },
  logo_name_link_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: "2rem",
  },
  detailsBox: {
    width: "60%",
  },
  sideInfo: {
    width: "30%",
    backgroundColor: "blue",
  },
  writeReview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#fff",
  },
  ReviewResultDisplay: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginTop: "1rem",
    backgroundColor: "#fff",
  },
  reviewResultHeader: {
    borderBottom: "1px solid #eee",
  },
  ReviewScaleBars: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1rem",
  },
  singleBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: ".4rem",
  },
  bar: {
    width: "75%",
    height: "10px",
    backgroundColor: "#cee",
    borderRadius: "2px",
    overflow: "hidden",
    position: "relative",
  },
  spanExcellent: {
    width: "90%",
    height: "100%",
    backgroundColor: "green",
    position: "absolute",
    left: "0",
    top: "0",
  },
  reviewParameters: {
    width: "100%",
    // height: "300px",
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    overflow: "hidden",
  },
});

const { Data } = ActivitieZData();

const Profile = ({ businessname }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <Box className={classes.upperWrapper}>

      <Box className={classes.profileHeader}>
        <Container maxWidth="md" className={classes.profile_header_wrapper}>
          {/* breadcrumbs */}
          <Typography component="div" variant="p1">
            Mone& Insurance > Investments > Non-Bank Financial Service >
            (company)
          </Typography>
          <Box className={classes.logo_name_link_box}>
            {/*  logo+name+ avrage score*/}
            <Box className={classes.companyIdentification}>
              <Box className={classes.imgBox}>
                <CardMedia component="img" image={Lays} alt="/" />
              </Box>
              <Box className={classes.companyScoreInfo}>
                <Typography variant="h4" component="h4">
                  {Data.businessname}
                </Typography>
                <ListItem>
                  <Typography>Reviews 3002 . Excellent</Typography>
                </ListItem>
                <ListItem>
                  <Rating name="no-value" value={4} />
                  <Typography varaint="caption" component="span">
                    4.5
                  </Typography>
                </ListItem>
              </Box>
            </Box>
            {/* link to the website */}

            <Box className={classes.visitWebsite}>
              <Typography variant="p1" component="p">
                Visit this website
                <Button
                  startIcon={<LanguageIcon />}
                  endIcon={<ArrowForwardIosOutlinedIcon />}
                >
                  wwww.puzzlegame.com
                </Button>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Container maxWidth="md" className={classes.detailsWrapper}>
        <Box className={classes.detailsBox}>
          <Box className={classes.writeReview}>
            <Typography variant="p" component="">
              Write a review
            </Typography>
            <Rating
              name="no-value"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box className={classes.ReviewResultDisplay}>
            <Box divider className={classes.reviewResultHeader}>
              <Typography variant="h6" component="h6">
                Reviews 3002
              </Typography>
            </Box>
            <Box className={classes.ReviewScaleBars}>
              <Box className={classes.singleBar}>
                <Typography variant="body2" component="div">
                  Excellent
                </Typography>
                <Box className={classes.bar}>
                  <Box
                    variant="body2"
                    component="span"
                    className={classes.spanExcellent}
                  ></Box>
                </Box>
                <Typography variant="body2" component="div">
                  90%
                </Typography>
              </Box>
              <Box className={classes.singleBar}>
                <Typography
                  variant="body2"
                  component="div"
                  style={{ marginRight: "1.4rem" }}
                >
                  Great
                </Typography>
                <Box className={classes.bar}>
                  <Box
                    variant="body2"
                    component="span"
                    className={classes.spanExcellent}
                  ></Box>
                </Box>
                <Typography variant="body2" component="div">
                  70%
                </Typography>
              </Box>
              <Box className={classes.singleBar}>
                <Typography
                  variant="body2"
                  component="div"
                  style={{ marginRight: ".5rem" }}
                >
                  Average
                </Typography>
                <Box className={classes.bar}>
                  <Box
                    variant="body2"
                    component="span"
                    className={classes.spanExcellent}
                  ></Box>
                </Box>
                <Typography variant="body2" component="div">
                  90%
                </Typography>
              </Box>

              <Box className={classes.singleBar}>
                <Typography
                  variant="body2"
                  component="div"
                  style={{ marginRight: "1.8rem" }}
                >
                  Poor
                </Typography>
                <Box className={classes.bar}>
                  <Box
                    variant="body2"
                    component="span"
                    className={classes.spanExcellent}
                  ></Box>
                </Box>
                <Typography variant="body2" component="div">
                  90%
                </Typography>
              </Box>
              <Box className={classes.singleBar}>
                <Typography
                  variant="body2"
                  component="div"
                  style={{ marginRight: "1.8rem" }}
                >
                  Bad
                </Typography>
                <Box className={classes.bar}>
                  <Box
                    variant="body2"
                    component="span"
                    className={classes.spanExcellent}
                  ></Box>
                </Box>
                <Typography variant="body2" component="div">
                  0%
                </Typography>
              </Box>
            </Box>
            <Box className={classes.reviewParameters}>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="contained"
                disableElevation
              >
                All reviews
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                car
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                process
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                experience
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                offer
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                check
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                time
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                hour
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                transaction
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                company
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                way
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                customer service
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                deal
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                logistics
              </Button>
              <Button
                style={{
                  maxHeight: "25px",
                  padding: "1rem",
                  marginBottom: ".5rem",
                }}
                variant="outlined"
              >
                location
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.sideInfo}>Side info</Box>
      </Container>
      
    </Box>
  );
};

export default Profile;
