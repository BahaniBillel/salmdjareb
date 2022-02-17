import React from "react";
import { Box, Container } from "@material-ui/core";
import Banner from "../components/Banner";
import CategoryShow from "../components/CategoryShow";



const Home = () => {
  return (
    <Box>
      <Banner />
      <CategoryShow/>
    </Box>
  );
};

export default Home;
