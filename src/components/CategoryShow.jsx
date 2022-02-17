import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Card,
  Typography,
  CardMedia,
} from "@material-ui/core";

import ActivitieZData from "../components/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const useStyles = makeStyles({
  Wrapper: {
    height: "50vh",
    width: "100wv",
    background: " rgb(235,235,235)",
    background:
      "linear-gradient(286deg, rgba(235,235,235,1) 0%, rgba(251,251,251,1) 70%, rgba(230,230,230,1) 100%)",
    position: "relative",
  },
  innerWrapper: {
    position: "absolute",
    top: "-25%",
    left: "50%",
    width: "100%",
    height: "100%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    padding: "0",
    // backgroundColor:"purple",
  },
  upper: {
    height: "8%",
    width: "100%",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  showcase: {
    height: "93%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItem: "center",
    // backgroundColor:"yellow",
    padding: "0",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeght: "300",
    minWidth: "220px",
    maxHeight: "90px",
    height: "75px",
    margin: "0.3rem",
    padding: ".3rem",
  },

  cardText: {
    fontSize: ".8rem",
    fontWeight: 300,
    width: "65%",
    textAlign: "left",
  },
  cardIcon: {
    width: "30%",
    textAlign: "center",
  },
});

const {Data}=ActivitieZData();



const CategoryShow = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Wrapper}>
      <Container maxWidth="md" className={classes.innerWrapper}>
        <Container className={classes.upper}>
          <Typography>Explore Categories</Typography>
          <Link to="/categoryList">View all</Link>
        </Container>
        <Container className={classes.showcase}>
          {/* Mapping the card activities  */}
          {Data.map((card) => (
            <Link to={`/categories/${card.id}`}>
              <Card key={card.id} component="div" className={classes.card}>
                <CardMedia className={classes.cardIcon}>{card.icon}</CardMedia>
                <Typography
                  variant="subtitle2"
                  className={classes.cardText}
                  component="div"
                >
                  {card.activity}
                </Typography>
              </Card>
            </Link>
          ))}
        </Container>
      </Container>
    </Box>
  );
};

export default CategoryShow;
