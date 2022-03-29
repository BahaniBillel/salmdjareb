import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "1rem",
    marginBottom: "3rem",
    width:"100%",
    backgroundColor:"#eee",
    padding:".5rem",
  },
  formWrapper: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
 
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

const ShowReview = ({ rating, title, review }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.formWrapper}>
        <Box className={classes.detail}>
          <Box className={classes.rate}   gutterBottom>
            <Rating name="read-only" value={rating}  readOnly/>
          </Box>
          <Box className={classes.tellUs}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              gutterBottom
            >
              {review}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowReview;
