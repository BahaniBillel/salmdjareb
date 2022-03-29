import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import DisplayReviewResult from "../components/DisplayReviewResult";
import ShowReview from "../components/ShowReview";
import BusinessSideBarActivity from "../components/BusinessSideBarActivity";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import ReviewForm from "../components/ReviewForm";

const useStyles = makeStyles((theme)=>({
  upperWrapper: {
    overflow: "hidden",
  },
  profileHeader: {
    width: "100vw",
    height: "35vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down('sm')]: {
      width:"auto",
    },


    
  },
  profile_header_wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
     padding:"0",
    },
  },
  imgBox: {
    width: "20%",
  },
  companyIdentification: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "90%",
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
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column",
      
     
    },
  },

  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: "2rem",
    paddingLeft:"2rem ",
    paddingRight:"2rem ",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column",
      padding:'0 1.5rem',
    },
  },
  detailsBox: {
    width: "65%",
    // overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
      width:"auto",
    },
  },
  sideInfo: {
    width: "33%",
    // backgroundColor: "blue",
    [theme.breakpoints.down('sm')]: {
      width:"100%",
    },
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
    width: "80%",
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

  showReviews: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
}));

const { Data } = ActivitieZData();

const Profile = () => {
  const params = useParams();
  const pageId = params.id;
  // console.log(pageId, Data);

  // bringing data from firebase
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);

  // Retrieving data from firebase
  const getReviewsRef = collection(db, "reviews");

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  
  function getReviews() {
    getDocs(getReviewsRef)
      .then((response) => {
        console.log(response.docs.length);
      
        const firebaseReviews = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setReviews(firebaseReviews);
      })
      .catch((error) => console.log(error.message));
  }

  const classes = useStyles();

  return (
    <div>
      {Data.map((main) =>
        main.subCat.map((item) =>
          item.businesses.map((company) => {
            if (company.id === pageId) {
              return (
                <Box className={classes.upperWrapper}>
                  <Box className={classes.profileHeader}>
                    <Container
                      maxWidth="md"
                      className={classes.profile_header_wrapper}
                    >
                      {/* breadcrumbs */}
                      <Typography component="div" variant="p1">
                        {main.activity} > {item.subactivity}>
                        {company.businessname}
                      </Typography>
                      <Box className={classes.logo_name_link_box}>
                        {/*  logo+name+ avrage score*/}
                        <Box className={classes.companyIdentification}>
                          <Box className={classes.imgBox}>
                            <CardMedia component="img" image={Lays} alt="/" />
                          </Box>
                          <Box className={classes.companyScoreInfo}>
                            <Typography variant="h4" component="h4">
                              {company.businessname}
                            </Typography>
                            <ListItem>
                              <Typography>
                                Reviews {company.reviewsNumber} .{" "}
                                {company.appreciation}
                              </Typography>
                            </ListItem>
                            <ListItem>
                              <Rating name="no-value" value={company.rating} />
                              <Typography varaint="caption" component="span">
                                {company.overalRating}
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
                              {`wwww.${company.businessname}.com`}
                            </Button>
                          </Typography>
                        </Box>
                      </Box>
                    </Container>
                  </Box>

                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                  <Container maxWidth="md" className={classes.detailsWrapper}>
                    <Box className={classes.detailsBox}>
                    
                      <DisplayReviewResult
                        reviewsNumber={count}
                        params={company.parameters}
                      />
                      <ReviewForm
                        businessname={company.businessname}
                        companyId={company.id}
                        refresh={() => getReviews()}
                      />

                      {/* mapping reviews from firebase */}
                      <Box className={classes.showReviews}>
                        {reviews.map((review) => (
                          pageId=== review.data.companyId?
                          <ShowReview
                            key={review.companyId}
                            rating={review.data.rating}
                            title={review.data.title}
                            review={review.data.review}
                          />  :
                          null
                          
                        ))}
                      </Box>
                    </Box>
                    <Box className={classes.sideInfo}>
                      <BusinessSideBarActivity
                        businssname={company.businessname}
                        pageId={params.id}
                      />
                    </Box>
                  </Container>
                </Box>
              );
            }
          })
        )
      )}
    </div>
  );
};

export default Profile;
