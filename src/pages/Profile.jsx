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
import WriteReviewPage from '../../src/pages/WriteReviewPage';
import BusinessSideBarActivity from "../components/BusinessSideBarActivity";
import {collection} from "firebase/firestore";
import {db} from "../firebase-config";

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
    width: "65%",
    overflow:"hidden"
  },
  sideInfo: {
    width: "33%",
    // backgroundColor: "blue",
    
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
});

const { Data } = ActivitieZData();


const Profile = () => {
  const params = useParams();
  const pageId = params.id;
  console.log(pageId, Data);

  // bringing data from firebase
  const [newReview,setNewReview]=useState([])

  const getReviewsRef = collection(db,"reviews");

  useEffect(()=>{
    
    
  },[])
 


  const classes = useStyles();
  const [value, setValue] = useState(0);
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
                      {/* <Link href={"/write-review"} style={{textDecoration:"none",color:"#000"}}>
                        <Box className={classes.writeReview}>
                          
                          <Button variant='outlined'>Write a review</Button>                          
                          <Rating
                            name="no-value"
                            value={value}
                            onChange={( newValue) => {
                              setValue(newValue);
                              
                            }
                          }
                          />
                        </Box>
                        
                      </Link> */}
                      <DisplayReviewResult
                        reviewsNumber={company.reviewsNumber}
                        params={company.parameters}
                      />
                      <WriteReviewPage name={company.businessname}/>
                    </Box>
                    <Box className={classes.sideInfo}>
                    <BusinessSideBarActivity businssname={company.businessname}/>
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
