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
import Understanding from "../images/understanding.jpg";
const useStyles = makeStyles((theme) => ({
  aboutbanner: {
    height: "80vh",
    display: "flex",
    flexDirection: "row",

    marginBottom: "10rem",
    marginTop: "15rem",
    position: "relative",
    backgroundColor: "rgba(249,86,79,.25)",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem",
      height: "80vh",
    },
  },
  textBox: {
    padding: "2rem",
    width: "55%",
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",

  },
  imageBox: {
    position: "absolute",
    top: "-10%",
    right: "5%",
    width: "400px",
    height: "400px",
    background: `url(${Understanding}) center/cover`,
    borderRadius: "4px",
  },
  caption:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginBottom:"2rem",
  },
  category:{
    padding:".5rem 1rem",
    backgroundColor:"gold",
    marginRight:"1rem",
    borderRadius:"4px",
  },
  mainheadline:{
    fontSize:"2.5rem",
    fontWeight:"600",
  },
  textheadline:{
    fontWeight:"300",
    lineHeight:"2rem",
  }
}));

const Aboutbanner = () => {
  const classes = useStyles();
  return (
    <Container className={classes.aboutbanner}>
      <Box className={classes.imageBox}></Box>
      <Box className={classes.textBox}>
        <Box className={classes.caption}>
          <Typography className={classes.category}>Managment</Typography>
          <Typography className={classes.date}>Mai 12, 2021</Typography>
        </Box>
        <Typography variant="h5" className={classes.mainheadline}>
          We build a common ground of understanding <br />
          between businesses and consumers <br />
          for the greater good.
        </Typography>
        <Typography variant="body1" className={classes.textheadline}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          soluta odit voluptates repellat iusto voluptatibus cum itaque, commodi
          ad et architecto. Sit excepturi facilis maiores aliquam deleniti,
          voluptates doloribus beatae?.
        </Typography>
      </Box>
    </Container>
  );
};

export default Aboutbanner;

{
  /* <Typography variant="h3" className={classes.mainheadline}>
We build a common ground of understanding <br />
between businesses and consumers <br />
for the greater good.
<br />
</Typography> */
}
