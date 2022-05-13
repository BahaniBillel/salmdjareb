import React, { useState } from "react";
import { Typography, Box, makeStyles, TextField,Button} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { db, colRef } from "../firebase-config";

import { doc, setDoc, addDoc,onSnapshot } from "firebase/firestore";

const useStyles = makeStyles((theme)=>({
  wrapper: {
    marginTop: "1rem",
    marginBottom: "3rem",
  },
  formWrapper: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "5px",
    // boxShadow: "-1px 1px 2px #ccc",
    overflow: "hidden",
  },

  detail: {
    padding: "1rem ",
    width: "93%",
    [theme.breakpoints.down('sm')]: {
     padding:"0",
    },
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // fontSize: ".5rem",
    // backgroundColor:"violet",
    marginBottom: "1.5rem",
  },
  tellUs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "1.5rem",
    
  },
}));

const ReviewForm = ({ businessname, companyId,refresh}) => {
  const classes = useStyles();

  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");




  const submitHandler = (e) => {
    e.preventDefault();
    setDoc(doc(colRef), {
      rating,
      review,
      title,
      companyId,
    })
      .then((e) => {
        // alert("Your review has been submitted, thank your for sharing");
        setRating(0)
        setReview("")
        setTitle("")
        
      })
      .catch((error) => {
        alert(error.message);
        setRating(0)
        setReview("")
        setTitle("")
      });
  };

  return (
    <Box className={classes.wrapper}>
      <form className={classes.formWrapper} onSubmit={submitHandler}>
        <Box className={classes.detail}>
          <Box className={classes.rate}>
            <Typography variant="h6" component="div">
              Rate Your Recent Experience here
            </Typography>
          <Typography ></Typography>
            <Rating
         
              name="simple-controlled"
              defaultValue={2.5} 
              precision={0.5}
              value={rating}
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
          </Box>
          <Box className={classes.tellUs}>
            <Typography
              variant="h6"
              component="div"
              style={{ marginBottom: "1rem" }}
            >
              Tell us about your Experience
            </Typography>

            <TextField
              id="outlined"
              label="Your experience here"
              multiline
              value={review}
              rows={4}
              placeholder={`Tell us about your recent experience with ${businessname}...`}
              variant="outlined"
              fullWidth
              onChange={(event) => {
                setReview(event.target.value);
              }}
            />
          </Box>
          <Box className={classes.tellUs}>
            <Typography
              variant="h6"
              component="div"
             
              style={{ marginBottom: "1rem" }}
              
            >
              Give your review a title
            </Typography>

            <TextField
              id="outlined"
              label="Title"
              multiline
              rows={1}
              placeholder="Write the title of your review here..."
              variant="outlined"
              fullWidth
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Box>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "rgb(70,128,131)",
              color: "#fff",
              margin: "2rem 0",
              padding:".5rem 1rem",
              borderRadius:"4px",
              fontSize:".9rem",
              cursor:"pointer",
              fontWeight:"400"

            }}
            type="submit"
            onClick={refresh}
          >
            Submit your Review
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReviewForm;
