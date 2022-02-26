import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
    width: `${(props)=>props.widthValue}`,
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
  appreciation:{
    width:"15%",
   
  }
});

const SingleReviewBar = ({ rate, appreciation,widthValue }) => {
  const classes = useStyles();
  return (
    <Box className={classes.singleBar}>
      <Box className={classes.appreciation}>
        <Typography
          variant="body2"
          component="div"
          style={{ marginRight: "1.8rem" }}
        >
          {appreciation}
        </Typography>
      </Box>

      <Box className={classes.bar}>
        <Box
          variant="body2"
          component="span"
          className={classes.spanExcellent}
          style={{width:widthValue}}
        ></Box>
      </Box>

      <Typography variant="body2" component="div">
        {rate}
      </Typography>
    </Box>
  );
};

export default SingleReviewBar;
