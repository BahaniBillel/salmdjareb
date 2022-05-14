import React from "react";
import { Box, Container } from "@material-ui/core";
import Banner from "../components/Banner";

import JoinCommunity from "../components/JoinCommunity";
import CallToAction from "../components/CallToAction";
import CategoryShow from "../components/CategoryShow";

import HomeSlides from "../components/HomeSlides";
import HomeWhoAreWe from "../components/HomeWhoAreWe";
import HomeFeaures from "../components/HomeFeatures";
import Note from "../components/Note";

const Home = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Banner />
      <HomeFeaures />
      <CategoryShow />
      <HomeWhoAreWe />

      <HomeSlides />
      <CallToAction />
      <JoinCommunity />
      <Note
        line1={
          "  This Prototype is   Desktop First-approach for most of its section."
        }
        line2={"Please use PC for better user Experience "}
      />
    </Box>
  );
};

export default Home;
