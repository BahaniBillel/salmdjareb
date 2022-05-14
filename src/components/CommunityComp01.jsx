import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";


import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  comp01: {
    padding: "2rem",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 1rem",
    borderBottom: "1px solid #eee",
  },
  tail:{
    padding:"1rem 0",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"nowrap",
  },writer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  }
}));

const CommunityComp01 = ({photo,category,headline,paragraph,writer,date,link,width}) => {
  const classes = useStyles();

  return (
    <Box className={classes.comp01} style={{width:`${width}`}}>
      
      <Box className={classes.imgBox}>
        <img src={photo} alt="/" style={{ width: "100%" }} />
      </Box>
      <Box className={classes.content}>
        <Typography vraiant="h5" style={{ color: "#f9564f" }}>
          {category}
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: "#010101",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
          gutterBottom
        >
          {headline}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "300",
            lineHeight: "2.5rem",
          }}
        >
           {paragraph}
        </Typography>
      </Box>
      <Box className={classes.tail}>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
           
          }}
        >
          <Link to={`/${link}`} style={{color:"#000"}}>
          KEEP READING... 
          </Link>
        </Typography>
        <Box className={classes.writer}>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "400",
           marginRight:".5rem",
          }}
        >
          By <strong>{writer}</strong>
        </Typography>
        |
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "400",
            marginLeft:".5rem",
          }}
        >
         {date}
        </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default CommunityComp01;
