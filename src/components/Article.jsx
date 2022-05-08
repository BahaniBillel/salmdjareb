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
import MyPhoto from "../images/myphoto2.jpg";
import WhiteSmoke from "../images/whiteSmoke.jpg";

const useStyles = makeStyles((theme) => ({
  article: {
    height: "150vh",
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
    width: "50%",
  },
  mainheadline: {
    fontSize: "2rem",
    fontWeight: "500",
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
    width: "50%",
    position: "relative",
    background: `url(${MutualUnderstanding}) center/cover`,
    height: "100%",
  },

  ownerSaying: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "5rem",
    width: "100%",
   
  },
  imageBox: {
    width: "30%",
    height: "550px",
    position: "relative",
    background: `url(${MyPhoto}) center/cover`,
  },
  content: {
    padding: "2rem",
    height: "400px",
    width: "350px",
    position: "relative",
    background: " rgb(249,255,9)",
    background:
      "linear-gradient(286deg, rgba(249,255,9,1) 0%, rgba(249,230,79,1) 71%, rgba(251,239,46,1) 100%)",
  },
  contentText: {
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontWeight: "600",
  },
  lowerThird: {
    width: "600px",
    height: "80px",
    postion: "absolute",
    left: "0",
    bottom: "-40%",
    background: `url(${WhiteSmoke}) center/cover`,
  },
}));

const Article = () => {
  const classes = useStyles();
  return (
    <Container className={classes.article}>
      <Box className={classes.row}>
        <Box className={classes.leftBox}>
          <Typography variant="h5" className={classes.mainheadline}>
            What is SAL-MDJAREB?
          </Typography>
          <Box className={classes.textBox}>
            <Typography
              variant="body1"
              className={classes.text}
              component="div"
            >
              SAL MDJAREB is an Algerian social network platform based on a
              crowdsourcing system that enables users to share their experiences
              and exchange their opinions about any local business's product or
              service.
              <br />
              <br />
              This online platform is destined for both large public users and
              local businesses.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.rightBox}></Box>
      </Box>
      <Box className={classes.ownerSaying}>
        <Box className={classes.imageBox}>
          <Box className={classes.lowerThird}></Box>
        </Box>
        <Box className={classes.content}>
          <Typography
            variant="body1"
            className={classes.contentText}
            component="div"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eius
            dolorum accusantium ab fugit eveniet nesciunt magnam, corrupti
            praesentium temporibus.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
