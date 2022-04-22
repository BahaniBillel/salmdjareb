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

const useStyles = makeStyles((theme) => ({
  homeProduct: {
    width: "100%",
    height: "120vh",
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
          <Typography variant="h5">
            REVIEWS.io helped us build trust with customers, which has had a
            positive impact on customer satisfaction and conversion.
          </Typography>
        </Box>
        <Box style={{ width: "65%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          tenetur esse quibusdam unde commodi ad minima suscipit, iusto ipsa
          culpa architecto, maxime accusamus. Perferendis nisi possimus ea
          placeat labore eius repellendus quis iure voluptatum! Laborum nostrum
          saepe vitae incidunt magni? Aperiam assumenda est adipisci expedita,
          tenetur asperiores iure alias consectetur.
        </Box>
      </Container>
    </Box>
  );
};

export default HomeProduct;
