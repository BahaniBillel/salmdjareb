import React, { useState } from "react";
import { Typography, Box, makeStyles, TextField } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { db ,colRef} from "../firebase-config";

import { doc, setDoc,addDoc } from "firebase/firestore"; 


const useStyles = makeStyles({
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
});



const ReviewForm = ({ businessname, handleClick }) => {
  const classes = useStyles();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");

  const submitHandler =(e) => {
    
    e.PrevenyDefault();
     addDoc(doc(colRef),{
      rating,
      review,
      title,
    })
    .then((e)=>{
      alert("Your review has been submitted, thank your for sharing")
      e.reset();
    })
    .catch(error =>{alert(error.message)})
  };

  return (
    <Box className={classes.wrapper}>
      <form className={classes.formWrapper} onSubmit={submitHandler}>
        <Box className={classes.detail}>
          <Box className={classes.rate}>
            <Typography variant="h6" component="div">
              Rate Your Recent Experience here
            </Typography>
            <Rating
              name="no-value"
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
              value={title}
              style={{ marginBottom: "1rem" }}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
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
            />
          </Box>
        </Box>
        <button
          variant="outlined"
          style={{ backgroundColor: "green", color: "#fff", margin: "2rem 0" }}
          OnClick={handleClick}
          type="submit"
        >
          Submit your Review
        </button>
      </form>
    </Box>
  );
};

export default ReviewForm;
