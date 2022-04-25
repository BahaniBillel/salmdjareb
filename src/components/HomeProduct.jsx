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
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link } from "react-router-dom";
import Trust from "../images/trust.jpg";
import Showcase from "../images/showcase.svg";
import Showcase2 from "../images/showcase2.svg";

const useStyles = makeStyles((theme) => ({
  homeProduct: {
    width: "100%",
    height: "120vh",
    margin:"10rem 0"
  },

  innerWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fcc8c2",
    borderRadius: "4px",
    padding: "3rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "nowrap",
  },
}));

const HomeProduct = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeProduct}>
      <Container className={classes.innerWrapper}>
        <Box style={{ width: "35%" }}>
          <Typography variant="h2" style={{ fontWeight: "600" }}>
            Trust.
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.75rem",
              fontWeight: "300",
              padding: "0 3rem 0 0",
            }}
          >
            Reviews help consumers buy with confidence - and 93% of online
            shoppers say they impact their purchase decisions.
            <br />
            <br />
            <br />
            Boost your brand’s conversion with trust signals at every point of
            contact.
          </Typography>
          <FormatQuoteIcon
            style={{ transform: "rotate(180deg)", fontSize: "3.5rem" }}
          />
          <Typography variant="h5" style={{padding:"0 2rem 0 0"}} component="div">
            SAL-MADJAREB helped us build trust with customers, which has had a
            positive impact on customer satisfaction and conversion.
          </Typography>
        </Box>

        {/* Right side */}
        <Box
          style={{
            width: "65%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              height: "60%",
              width: "100%",
              background: "rgb(131,70,119)",
              background:
                "linear-gradient(286deg, rgba(131,70,119,1) 0%, rgba(249,86,79,1) 71%, rgba(230,230,230,1) 100%)",
              padding: "1rem",
            }}
          >
            <Box
              style={{
                width: "60%",
                transform: "translateY(-28%)",
                background: "#fff",
                padding: "1rem",
              }}
            >
              <img
                src={Trust}
                alt=""
                style={{ objectFit: "scale-down", width: "100%" }}
              />
            </Box>
            <Box style={{ width: "60%", transform: "translate(30%,-100%)" }}>
              <img
                src={Showcase}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
          <Box
            style={{
              height: "40%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyConent: "space-between",
              padding:"2rem 0"
            }}
          >
            <Box style={{width:"32%", padding:"1rem"}}>
              <Typography variant="h6" component="div">
                Product reviews
              </Typography>
              <Typography variant="body1" component="div">
                See greater conversion with product review throughout the buyer
                journey. The more feedback you collect, the greater the SEO
                benefits.
              </Typography>
            </Box>
            <Box  style={{width:"32%", padding:"1rem"}}>
              <Typography variant="h6" component="div">
                Product insights
              </Typography>
              <Typography variant="body1" component="div">
                Enhance the shopping experience and help customers choose the
                right products for their needs with Reviewer attributes
              </Typography>
            </Box>
            <Box  style={{width:"32%", padding:"1rem"}}>
              <Typography variant="h6" component="div">
                Smarter collection
              </Typography>
              <Typography variant="body1" component="div">
                Set predefined sending conditions and get more reviews with our
                Flow collection tool. Use SMS invites to follow up, and boost
                review conversion by an average of 22%.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeProduct;
