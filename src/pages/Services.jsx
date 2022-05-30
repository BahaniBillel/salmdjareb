import React from "react";
import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import SelectSearchBar from "../components/SelectSearchBar";
import CustomerReview from "../images/customerReview.jpg";
import CompaniezData from "../Donnes.json";
import SearchBar from "../components/SearchBar";
import PricingPlan from "../components/PricingPlan";
import ServiceItem from "../components/ServiceItem";

const useStyles = makeStyles((theme) => ({
  services: {
  padding:"10rem 0",
    [theme.breakpoints.down("sm")]: {},
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <Container className={classes.services}>
        <PricingPlan />

        <ServiceItem/>
      </Container>
    </Box>
  );
};

export default Services;
