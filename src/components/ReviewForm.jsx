import React, { useState } from "react";
import {

  Typography,
  Box,
  makeStyles,
  TextField,


} from "@material-ui/core";
import Rating from "@mui/material/Rating";



const useStyles = makeStyles({
  wrapper: {
    marginTop: "1rem",
    marginBottom:"3rem",
  
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
    overflow:"hidden",
  
  
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

const submitHandler =(event)=>{
event.PrevenyDefault();
return
}

const ReviewForm = ({businessname}) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  return (
    <Box className={classes.wrapper} >
      <form className={classes.formWrapper} onSubmit={submitHandler}>
        <Box className={classes.detail}>
          <Box className={classes.rate}>
            <Typography variant="h6" component="div">
              Rate Your Recent Experience here
            </Typography>
            <Rating
              name="no-value"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
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
              rows={4}
              placeholder={`Tell us about your recent experience with ${businessname}...`}
              variant="outlined"
              fullWidth
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
            />
          </Box>
        </Box>
        <button variant="outlined" style={{backgroundColor:"green" ,color:"#fff",margin:"2rem 0"}}>Submit your Review</button>
       
      </form>
    </Box>
  );
};

export default ReviewForm;
