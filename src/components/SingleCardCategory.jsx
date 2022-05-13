import React, { useState } from "react";
import {
  makeStyles,
  ListItemText,
  Box,
  ListItem,
  Typography,
  CardMedia,
  Card,
} from "@material-ui/core";
import ReadRating from "./ReadRating";

const useStyles = makeStyles({
  wrapper: {
    width: "630px",
    height: "180px",
    margin: " 3rem 0",
    cursor: "pointer",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    // marginBottom:"1rem"
  },
  img: {
    width: "20%",
  },
  content: {
    width: "80%",
  },
});

const SingleCardCategory = ({
  logo,
  companyName,
  clickHandler,
  reviewsNumber,
  averageScore,
  mainActivity,
  adresse,
  RatingValue
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} onClick={clickHandler}>
      <Card className={classes.card}>
        <Box className={classes.img}>
          <CardMedia component="img" image={logo} alt="/" />
        </Box>
        <Box className={classes.content}>
          <ListItem>
            <Typography
              variant="h6"
              component="div"
              style={{ marginRight: ".5rem" }}
            >
              {companyName}
            </Typography>
            <ReadRating
              value={RatingValue}
            />
          </ListItem>
          <ListItem>
            <ListItemText secondary={`${reviewsNumber} reviews`} />
            <ListItemText secondary={`AverageScore :${averageScore}`} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={`${mainActivity}`} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={`${adresse}`} />
          </ListItem>
        </Box>
      </Card>
    </Box>
  );
};

export default SingleCardCategory;
