import React from "react";
import { Box, Typography, makeStyles} from "@material-ui/core";
import SingleReviewBar from "./SingleReviewBar";
import ParamterButton from './ParameterButton';


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

const DisplayReviewResult = ({reviewsNumber,params}) => {
    const classes = useStyles();
  return (
    <Box className={classes.ReviewResultDisplay}>
      <Box divider className={classes.reviewResultHeader}>
        <Typography variant="h6" component="h6">
          Reviews : {reviewsNumber}
        </Typography>
      </Box>
      <Box className={classes.ReviewScaleBars}>
       <SingleReviewBar appreciation={'Excellent'} rate={'95%'} widthValue={"95%"}/>
       <SingleReviewBar appreciation={'Great'} rate={'28%'} widthValue={"28%"}/>
       <SingleReviewBar appreciation={'Average'} rate={'06%'} widthValue={"06%"}/>
       <SingleReviewBar appreciation={'Poor'} rate={'07%'} widthValue={"7%"}/>
       <SingleReviewBar appreciation={'Bad'} rate={'01%'} widthValue={"1%"}/>
      </Box>
      <Box className={classes.reviewParameters}>
       {params.map(param=>(
           <ParamterButton param={param}/>
       ))}
      </Box>
    </Box>
  );
};

export default DisplayReviewResult;
