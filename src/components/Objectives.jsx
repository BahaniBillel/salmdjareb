import * as React from "react";
import {
  Container,
  makeStyles,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
  ButtonGroup,
  Box,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MutualUnderstanding from "../images/mutualUnderstanding.png";
import MyPhoto from "../images/myphoto02.jpg";
import Quote from "./QuoteIcon";

const useStyles = makeStyles((theme) => ({
  article: {
    height: "auto",
    padding: "3rem",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {},
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
    marginBottom: "5rem",
  },

  leftBox: {
    // width: "50%",
  },
  mainheadline: {
    fontSize: "2rem",
    fontWeight: "500",
    borderLeft: "5px solid #f9564f",
    paddingLeft: "1rem",
  },
  textBox: {
    marginTop: "2rem",
  },
  text: {
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontWeight: "300",
  },

  rightBox: {
    width: "100%",
    position: "relative",
    background: `url(${MutualUnderstanding}) center/cover`,
    height: "300px",
  },

  ownerSaying: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "5rem",
    marginTop: "10rem",
    width: "100%",
    position: "relative",
  },
  imageBox: {
    width: "100%",
    height: "550px",
    position: "relative",
    background: `url(${MyPhoto}) center/80%`,
    backgroundRepeat: "no-repeat",
  },
  content: {
    position: "absolute",
    left: "55%",
    top: "10%",
    padding: "1.5rem",
    height: "400px",
    width: "380px",
    background: " rgb(249,255,9)",
    background:
      "linear-gradient(286deg, rgba(249,255,9,1) 0%, rgba(249,230,79,1) 71%, rgba(251,239,46,1) 100%)",
  },
  contentText: {
    fontSize: "1rem",
    lineHeight: "2.3rem",
    fontWeight: "300",
  },
  innerContent: {
    width: "100%",
    height: "auto",
    background: "#fff",
    padding: "2rem",
    borderRadius: "4px",
  },
  name: {
    fontWeight: "600",
    marginTop: "2rem",
  },
  jobtitle: {
    fontWeight: "300",
    fontSize: ".8rem",
  },
}));

const Objectives = () => {
  const classes = useStyles();
  return (
    <Container className={classes.article}>
      <Box className={classes.row}>
        <Box className={classes.leftBox}>
          <Typography variant="h5" className={classes.mainheadline}>
            Our Strategique Objectives.
          </Typography>
          <Box className={classes.textBox}>
            <ul
              style={{
                fontSize: "1.5rem",
                lineHeight: "2.5rem",
                fontWeight: "300",
              }}
            >
              <li>
                {" "}
                Build a community of trusted reviews between business and consumers.
              </li>
              <li>
              To stand as a  reference for the quality of  products and services offered by local businesses.

              </li>
              <li>
              rive mobile /web engagement by Making SAL MDJARB more useful for everyday consumers needs like shopping

              </li>
              <li>
              Increase  Awareness of SAL MDJAREB amongst consumers and businesses

              </li>
    
            </ul>
        
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Objectives;
