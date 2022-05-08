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
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import ReviewForm from "../components/ReviewForm";
import TextRating from "../components/TextRating";
import ProfileHeader from "./ProfileHeader";

const useStyles = makeStyles((theme) => ({
  upperWrapper: {
    overflow: "hidden",
  },
  profileHeader: {
    width: "100vw",
    height: "35vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile_header_wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: "2rem",
    paddingLeft: "2rem ",
    paddingRight: "2rem ",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "0 1.5rem",
    },
  },
  detailsBox: {
    width: "65%",
    // overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  sideInfo: {
    width: "33%",
    marginTop: "1rem",
    // backgroundColor: "blue",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
  const classes = useStyles();
  const params = useParams();
  const pageId = params.id;
  // console.log(pageId, Data);

  // bringing data from firebase
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);
const [rating,setRating]=useState([])
  // Retrieving data from firebase
  const getReviewsRef = collection(db, "reviews");

  useEffect(() => {
    getReviews();
    getRatingpoints();
  }, []);

  useEffect(() => {
    // console.log(reviews);
  }, [reviews]);

  function getReviews() {
    getDocs(getReviewsRef)
      .then((response) => {
        // console.log(response.docs.length);

        const firebaseReviews = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setReviews(firebaseReviews);
      })
      .catch((error) => console.log(error.message));
  }

  // Calculating avarge rating using firebase

  const getRatingpoints = async()=>{
    const data = await getDocs(getReviewsRef);
    setRating(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    console.log(rating);
  }


 

  return (
    <div>
      {Data.map((main) =>
        main.subCat.map((item) =>
          item.businesses.map((company) => {
            if (company.businessname === pageId) {
              return (
                <Box className={classes.upperWrapper}>
                  <ProfileHeader
                    logo={company.logo}
                    businessname={company.businessname}
                    overalRating={company.overalRating}
                    reviewsCounts={company.reviewsNumber}
                    main={main.activity}
                    subactivity={item.subactivity}
                    appreciation={company.appreciation}
                    rating={company.overalRating}
                  />

                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                  <Container maxWidth="md" className={classes.detailsWrapper}>
                    <Box className={classes.detailsBox}>
                      <DisplayReviewResult
                        reviewsNumber={company.reviewsNumber}
                        params={company.parameters}
                      />
                      <ReviewForm
                        businessname={company.businessname}
                        companyId={company.businessname}
                        refresh={() => getReviews()}
                      />

                      {/* mapping reviews from firebase */}
                      <Box className={classes.showReviews}>
                        {reviews.map((review) =>
                          pageId === review.data.companyId ? (
                            <ShowReview
                              key={review.companyId}
                              rating={review.data.rating}
                              title={review.data.title}
                              review={review.data.review}
                              // createdAt={time}
                            />
                          ) : null
                        )}
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
